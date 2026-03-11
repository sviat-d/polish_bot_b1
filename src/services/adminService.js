/**
 * Admin Service
 * Functions for admin analytics and management
 */

const fs = require('fs');
const path = require('path');
const config = require('../config');
const userService = require('./userService');

/**
 * Load all users from files
 */
function loadAllUsers() {
  const usersDir = config.PATHS.USERS_DIR;

  if (!fs.existsSync(usersDir)) {
    return [];
  }

  const files = fs.readdirSync(usersDir);
  const users = [];

  for (const file of files) {
    if (!file.endsWith('.json')) continue;

    try {
      const filePath = path.join(usersDir, file);
      const data = fs.readFileSync(filePath, 'utf-8');
      const user = JSON.parse(data);
      users.push(user);
    } catch (err) {
      console.error(`Error loading ${file}:`, err.message);
    }
  }

  return users;
}

/**
 * Calculate overall statistics
 */
function calculateOverallStats(users) {
  const stats = {
    totalUsers: users.length,
    newUsers: 0, // 0 answers
    activeUsers: 0, // 1+ answers
    totalAnswers: 0,
    totalCorrect: 0,
    totalIncorrect: 0,
    averageProgress: 0,
    accuracyRate: 0,
    languagePreference: {
      ru: 0,
      pl: 0
    },
    ratingEnabled: 0
  };

  for (const user of users) {
    const answerCount = user.answers?.length || 0;
    stats.totalAnswers += answerCount;

    if (answerCount === 0) {
      stats.newUsers++;
    } else {
      stats.activeUsers++;
    }

    for (const answer of user.answers || []) {
      if (answer.isCorrect) {
        stats.totalCorrect++;
      } else {
        stats.totalIncorrect++;
      }
    }

    const completedCount = user.completedTasks?.length || 0;
    stats.averageProgress += completedCount;

    const lang = user.language || 'ru';
    stats.languagePreference[lang]++;

    if (user.ratingEnabled) {
      stats.ratingEnabled++;
    }
  }

  if (stats.totalUsers > 0) {
    stats.averageProgress = Math.round(stats.averageProgress / stats.totalUsers);
  }

  if (stats.totalAnswers > 0) {
    stats.accuracyRate = Math.round((stats.totalCorrect / stats.totalAnswers) * 100);
  }

  return stats;
}

/**
 * Get recent users (last N days)
 */
function getRecentUsers(users, days = 7) {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);

  return users
    .filter(u => {
      if (!u.createdAt) return false;
      return new Date(u.createdAt) >= cutoffDate;
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

/**
 * Get top users by completed tasks
 */
function getTopUsers(users, limit = 10) {
  return users
    .map(u => ({
      ...u,
      completedCount: u.completedTasks?.length || 0,
      answersCount: u.answers?.length || 0,
      accuracy: calculateUserAccuracy(u)
    }))
    .sort((a, b) => b.completedCount - a.completedCount)
    .slice(0, limit);
}

/**
 * Calculate user accuracy
 */
function calculateUserAccuracy(user) {
  if (!user.answers || user.answers.length === 0) return 0;

  const correct = user.answers.filter(a => a.isCorrect).length;
  return Math.round((correct / user.answers.length) * 100);
}

/**
 * Get users by date (grouped by day)
 */
function getUsersByDate(users) {
  const byDate = {};

  for (const user of users) {
    if (!user.createdAt) continue;

    const date = user.createdAt.split('T')[0];
    byDate[date] = (byDate[date] || 0) + 1;
  }

  return Object.entries(byDate)
    .sort(([a], [b]) => b.localeCompare(a))
    .slice(0, 14); // Last 14 days
}

/**
 * Format stats for Telegram message
 */
function formatStatsForTelegram(stats) {
  const total = stats.totalUsers;
  const accuracy = stats.accuracyRate;

  return `📊 <b>СТАТИСТИКА БОТА</b>

👥 <b>Пользователи:</b>
   Всего: ${stats.totalUsers}
   Новые (0 ответов): ${stats.newUsers}
   Активные: ${stats.activeUsers}

📝 <b>Ответы:</b>
   Всего ответов: ${stats.totalAnswers}
   ✅ Правильных: ${stats.totalCorrect} (${accuracy}%)
   ❌ Неправильных: ${stats.totalIncorrect}

📈 <b>Прогресс:</b>
   Средний прогресс: ${stats.averageProgress} заданий

🌐 <b>Язык объяснений:</b>
   🇷🇺 Русский: ${stats.languagePreference.ru} чел.
   🇵🇱 Польский: ${stats.languagePreference.pl} чел.

⭐ <b>Рейтинг:</b>
   Включён у ${stats.ratingEnabled} пользователей`;
}

/**
 * Format top users for Telegram message
 */
function formatTopUsersForTelegram(topUsers) {
  if (topUsers.length === 0) {
    return '🏆 <b>ТОП ПОЛЬЗОВАТЕЛЕЙ:</b>\n\nПока нет активных пользователей.';
  }

  let text = '🏆 <b>ТОП-10 ПОЛЬЗОВАТЕЛЕЙ</b>\n\n';

  topUsers.forEach((user, index) => {
    const rank = index + 1;
    const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `${rank}.`;
    const name = user.firstName || user.username || `ID${user.chatId}`;
    const tasks = user.completedCount;
    const accuracy = user.accuracy;

    text += `${medal} <b>${name}</b>\n`;
    text += `   └ ${tasks} заданий, точность ${accuracy}%\n\n`;
  });

  return text;
}

/**
 * Format recent users for Telegram message
 */
function formatRecentUsersForTelegram(recentUsers, days = 7) {
  if (recentUsers.length === 0) {
    return `👤 <b>НОВЫЕ ПОЛЬЗОВАТЕЛИ (${days} дней):</b>\n\nНовых пользователей нет.`;
  }

  let text = `👤 <b>НОВЫЕ ПОЛЬЗОВАТЕЛИ (${days} дней): ${recentUsers.length}</b>\n\n`;

  recentUsers.slice(0, 10).forEach(user => {
    const name = user.firstName || user.username || `ID${user.chatId}`;
    const date = new Date(user.createdAt).toLocaleDateString('ru-RU');
    const tasks = user.completedTasks?.length || 0;

    text += `• <b>${name}</b>\n`;
    text += `  Зарегистрирован: ${date}, выполнено ${tasks} зад.\n\n`;
  });

  if (recentUsers.length > 10) {
    text += `\n...и ещё ${recentUsers.length - 10} пользователей`;
  }

  return text;
}

/**
 * Format users by date for Telegram message
 */
function formatUsersByDateForTelegram(usersByDate) {
  if (usersByDate.length === 0) {
    return '📅 <b>РЕГИСТРАЦИИ ПО ДНЯМ:</b>\n\nДанных нет.';
  }

  let text = '📅 <b>РЕГИСТРАЦИИ ПО ДНЯМ (14 дней):</b>\n\n';

  usersByDate.forEach(([date, count]) => {
    const bar = '█'.repeat(Math.min(count, 20));
    text += `${date}: ${bar} ${count}\n`;
  });

  return text;
}

module.exports = {
  loadAllUsers,
  calculateOverallStats,
  getRecentUsers,
  getTopUsers,
  getUsersByDate,
  formatStatsForTelegram,
  formatTopUsersForTelegram,
  formatRecentUsersForTelegram,
  formatUsersByDateForTelegram
};
