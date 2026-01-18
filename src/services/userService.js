const fs = require('fs');
const path = require('path');
const config = require('../config');

/**
 * Create default user progress object
 * @param {number} chatId - Telegram chat ID
 * @param {object} telegramUser - Telegram user object (from ctx.from)
 */
function createDefaultUser(chatId, telegramUser = null) {
  return {
    chatId: chatId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),

    // Telegram user info (for analytics)
    username: telegramUser?.username || null,
    firstName: telegramUser?.first_name || null,
    lastName: telegramUser?.last_name || null,
    languageCode: telegramUser?.language_code || null,
    isBot: telegramUser?.is_bot || false,

    // Task tracking
    completedTasks: [],
    currentTaskId: null,

    // Answer history
    answers: [],

    // Language preference for explanations ('ru' or 'pl')
    language: 'ru',

    // Rating feature
    ratingEnabled: false,
    ratingAskedAt: null,
    tasksSinceRatingAsk: 0,

    // Weak topic training mode
    weakTopicMode: {
      active: false,
      topic: null
    }
  };
}

/**
 * Get path to user's JSON file
 */
function getUserPath(chatId) {
  return path.join(config.PATHS.USERS_DIR, `${chatId}.json`);
}

/**
 * Ensure users directory exists
 */
function ensureUsersDir() {
  if (!fs.existsSync(config.PATHS.USERS_DIR)) {
    fs.mkdirSync(config.PATHS.USERS_DIR, { recursive: true });
  }
}

/**
 * Load user data from file
 */
function loadUser(chatId) {
  ensureUsersDir();
  const userPath = getUserPath(chatId);

  if (!fs.existsSync(userPath)) {
    return null;
  }

  try {
    const data = fs.readFileSync(userPath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error loading user:', chatId, err.message);
    return null;
  }
}

/**
 * Save user data to file
 */
function saveUser(user) {
  ensureUsersDir();
  const userPath = getUserPath(user.chatId);

  user.updatedAt = new Date().toISOString();

  try {
    fs.writeFileSync(userPath, JSON.stringify(user, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving user:', user.chatId, err.message);
    return false;
  }
}

/**
 * Get or create user
 * @param {number} chatId - Telegram chat ID
 * @param {object} telegramUser - Telegram user object (from ctx.from), optional
 */
function getOrCreateUser(chatId, telegramUser = null) {
  let user = loadUser(chatId);

  if (!user) {
    // Create new user with Telegram info
    user = createDefaultUser(chatId, telegramUser);
    saveUser(user);
  } else if (telegramUser) {
    // Update Telegram info for existing users (in case username/name changed)
    let updated = false;

    if (telegramUser.username && user.username !== telegramUser.username) {
      user.username = telegramUser.username;
      updated = true;
    }

    if (telegramUser.first_name && user.firstName !== telegramUser.first_name) {
      user.firstName = telegramUser.first_name;
      updated = true;
    }

    if (telegramUser.last_name && user.lastName !== telegramUser.last_name) {
      user.lastName = telegramUser.last_name;
      updated = true;
    }

    if (telegramUser.language_code && user.languageCode !== telegramUser.language_code) {
      user.languageCode = telegramUser.language_code;
      updated = true;
    }

    if (updated) {
      saveUser(user);
    }
  }

  return user;
}

/**
 * Mark task as completed and record answer
 */
function recordAnswer(chatId, taskId, topic, isCorrect, userAnswer, rating = null) {
  const user = getOrCreateUser(chatId);

  // Add to completed tasks if not already there
  if (!user.completedTasks.includes(taskId)) {
    user.completedTasks.push(taskId);
  }

  // Record answer
  user.answers.push({
    taskId,
    topic,
    isCorrect,
    userAnswer,
    rating,
    answeredAt: new Date().toISOString()
  });

  // Increment tasks since rating ask
  if (!user.ratingEnabled) {
    user.tasksSinceRatingAsk++;
  }

  // Clear current task
  user.currentTaskId = null;

  saveUser(user);
  return user;
}

/**
 * Set current task for user
 */
function setCurrentTask(chatId, taskId) {
  const user = getOrCreateUser(chatId);
  user.currentTaskId = taskId;
  saveUser(user);
  return user;
}

/**
 * Update rating for last answer
 */
function updateLastAnswerRating(chatId, rating) {
  const user = getOrCreateUser(chatId);

  if (user.answers.length > 0) {
    user.answers[user.answers.length - 1].rating = rating;
    saveUser(user);
  }

  return user;
}

/**
 * Enable rating for user
 */
function enableRating(chatId) {
  const user = getOrCreateUser(chatId);
  user.ratingEnabled = true;
  user.ratingAskedAt = new Date().toISOString();
  saveUser(user);
  return user;
}

/**
 * Disable rating for user
 */
function disableRating(chatId) {
  const user = getOrCreateUser(chatId);
  user.ratingEnabled = false;
  saveUser(user);
  return user;
}

/**
 * Record that rating was asked
 */
function recordRatingAsked(chatId) {
  const user = getOrCreateUser(chatId);
  user.ratingAskedAt = new Date().toISOString();
  user.tasksSinceRatingAsk = 0;
  saveUser(user);
  return user;
}

/**
 * Set weak topic mode
 */
function setWeakTopicMode(chatId, active, topic = null) {
  const user = getOrCreateUser(chatId);
  user.weakTopicMode = { active, topic };
  saveUser(user);
  return user;
}

/**
 * Toggle language preference between 'ru' and 'pl'
 */
function toggleLanguage(chatId) {
  const user = getOrCreateUser(chatId);
  user.language = user.language === 'ru' ? 'pl' : 'ru';
  saveUser(user);
  return user;
}

/**
 * Set language preference explicitly
 */
function setLanguage(chatId, language) {
  const user = getOrCreateUser(chatId);
  user.language = language;
  saveUser(user);
  return user;
}

/**
 * Reset user progress
 */
function resetUser(chatId) {
  const user = createDefaultUser(chatId);
  saveUser(user);
  return user;
}

/**
 * Calculate user statistics
 */
function calculateStats(user) {
  const stats = {
    totalAnswered: user.answers.length,
    totalCorrect: 0,
    totalIncorrect: 0,
    byTopic: {}
  };

  for (const answer of user.answers) {
    if (answer.isCorrect) {
      stats.totalCorrect++;
    } else {
      stats.totalIncorrect++;
    }

    // By topic
    const topic = answer.topic || 'Other';
    if (!stats.byTopic[topic]) {
      stats.byTopic[topic] = {
        total: 0,
        correct: 0,
        incorrect: 0,
        errorRate: 0
      };
    }

    stats.byTopic[topic].total++;
    if (answer.isCorrect) {
      stats.byTopic[topic].correct++;
    } else {
      stats.byTopic[topic].incorrect++;
    }
  }

  // Calculate error rates
  for (const topic of Object.keys(stats.byTopic)) {
    const topicStats = stats.byTopic[topic];
    if (topicStats.total > 0) {
      topicStats.errorRate = Math.round((topicStats.incorrect / topicStats.total) * 100);
    }
  }

  return stats;
}

/**
 * Find weakest topic
 */
function findWeakestTopic(user) {
  const stats = calculateStats(user);
  let weakestTopic = null;
  let highestErrorRate = 0;

  for (const [topic, topicStats] of Object.entries(stats.byTopic)) {
    // Only consider topics with enough attempts
    if (topicStats.total >= config.WEAK_TOPIC_MIN_ATTEMPTS) {
      if (topicStats.errorRate > highestErrorRate &&
          topicStats.errorRate >= config.WEAK_TOPIC_ERROR_RATE) {
        highestErrorRate = topicStats.errorRate;
        weakestTopic = topic;
      }
    }
  }

  return weakestTopic ? { topic: weakestTopic, errorRate: highestErrorRate } : null;
}

/**
 * Check if should ask about rating
 */
function shouldAskRating(user) {
  // Never asked yet
  if (!user.ratingAskedAt && !user.ratingEnabled) {
    return true;
  }

  // Asked before, declined, and reached threshold
  if (!user.ratingEnabled && user.tasksSinceRatingAsk >= config.RATING_REASK_AFTER) {
    return true;
  }

  return false;
}

module.exports = {
  createDefaultUser,
  loadUser,
  saveUser,
  getOrCreateUser,
  recordAnswer,
  setCurrentTask,
  updateLastAnswerRating,
  enableRating,
  disableRating,
  recordRatingAsked,
  setWeakTopicMode,
  toggleLanguage,
  setLanguage,
  resetUser,
  calculateStats,
  findWeakestTopic,
  shouldAskRating
};
