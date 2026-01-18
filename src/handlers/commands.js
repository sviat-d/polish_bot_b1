const userService = require('../services/userService');
const taskService = require('../services/taskService');
const adminService = require('../services/adminService');
const messages = require('../utils/messages');
const keyboard = require('../utils/keyboard');
const config = require('../config');

/**
 * Send next task to user
 */
async function sendNextTask(ctx, user) {
  const task = taskService.getNextTask(user);

  if (!task) {
    // All tasks completed
    if (user.weakTopicMode?.active) {
      // Completed all tasks in topic mode
      userService.setWeakTopicMode(ctx.chat.id, false);
      await ctx.reply(messages.topicCompleted(user.weakTopicMode.topic));

      // Try to get next task from all topics
      const updatedUser = userService.getOrCreateUser(ctx.chat.id);
      const nextTask = taskService.getNextTask(updatedUser);

      if (nextTask) {
        await sendTaskMessage(ctx, updatedUser, nextTask);
      } else {
        await ctx.reply(messages.allCompleted());
      }
    } else {
      await ctx.reply(messages.allCompleted());
    }
    return;
  }

  await sendTaskMessage(ctx, user, task);
}

/**
 * Send task message with keyboard
 */
async function sendTaskMessage(ctx, user, task) {
  // Set current task
  userService.setCurrentTask(ctx.chat.id, task.id);

  const totalTasks = taskService.getTotalTasksCount();
  const completedCount = user.completedTasks.length + 1;
  const topicMode = user.weakTopicMode?.active ? user.weakTopicMode.topic : null;

  const text = messages.task(task, completedCount, totalTasks, topicMode);

  await ctx.reply(text, keyboard.answerKeyboard(task.options));
}

/**
 * Handle /start command
 */
async function handleStart(ctx) {
  const chatId = ctx.chat.id;
  const user = userService.getOrCreateUser(chatId, ctx.from);
  const totalTasks = taskService.getTotalTasksCount();

  // Check if new user
  if (user.completedTasks.length === 0 && user.answers.length === 0) {
    // New user - show welcome
    await ctx.reply(messages.welcome());

    // Check if should ask about rating
    if (userService.shouldAskRating(user)) {
      await ctx.reply(messages.ratingAsk(), keyboard.ratingAskKeyboard());
      userService.recordRatingAsked(chatId);
      return;
    }
  } else {
    // Returning user
    await ctx.reply(messages.welcomeBack(user.completedTasks.length, totalTasks));
  }

  // Send next task
  await sendNextTask(ctx, user);
}

/**
 * Handle /stats command
 */
async function handleStats(ctx) {
  const chatId = ctx.chat.id;
  const user = userService.getOrCreateUser(chatId, ctx.from);

  if (user.answers.length === 0) {
    await ctx.reply(messages.noStats());
    return;
  }

  const stats = userService.calculateStats(user);
  const totalTasks = taskService.getTotalTasksCount();

  await ctx.reply(messages.stats(stats, totalTasks, user.language || 'ru'));
}

/**
 * Handle /weak command
 */
async function handleWeak(ctx) {
  const chatId = ctx.chat.id;
  const user = userService.getOrCreateUser(chatId, ctx.from);

  // If already in weak mode, show option to exit
  if (user.weakTopicMode?.active) {
    await ctx.reply(
      `Ты уже в режиме тренировки темы "${user.weakTopicMode.topic}".`,
      keyboard.exitWeakModeKeyboard()
    );
    return;
  }

  // Find weakest topic
  const weakest = userService.findWeakestTopic(user);

  if (!weakest) {
    await ctx.reply(messages.noWeakTopic());
    return;
  }

  await ctx.reply(
    messages.weakTopicSuggestion(weakest.topic, weakest.errorRate),
    keyboard.weakTopicKeyboard()
  );
}

/**
 * Handle /rating command - toggle rating on/off
 */
async function handleRating(ctx) {
  const chatId = ctx.chat.id;
  const user = userService.getOrCreateUser(chatId, ctx.from);

  if (user.ratingEnabled) {
    // Turn off rating
    userService.disableRating(chatId);
    await ctx.reply(messages.ratingDisabled());
  } else {
    // Turn on rating
    userService.enableRating(chatId);
    await ctx.reply(messages.ratingEnabled());
  }
}

/**
 * Handle /reset command
 */
async function handleReset(ctx) {
  await ctx.reply(messages.confirmReset(), keyboard.confirmResetKeyboard());
}

/**
 * Handle /lang command - toggle language between RU and PL
 */
async function handleLang(ctx) {
  const chatId = ctx.chat.id;
  const user = userService.toggleLanguage(chatId);

  await ctx.reply(messages.languageChanged(user.language));
}

/**
 * Handle /admin command - show admin statistics
 */
async function handleAdmin(ctx) {
  const chatId = ctx.chat.id;

  // Check if user is admin
  if (!config.ADMIN_CHAT_IDS.includes(chatId)) {
    await ctx.reply('❌ У тебя нет доступа к этой команде.');
    return;
  }

  const action = ctx.message.text.split(' ')[1]; // /admin [action]

  // Load all users
  const allUsers = adminService.loadAllUsers();

  if (allUsers.length === 0) {
    await ctx.reply('⚠️ Пользователи не найдены.\n\n💡 Убедись, что Railway Volume подключён правильно.');
    return;
  }

  // Default action: show overall stats
  if (!action || action === 'stats') {
    const stats = adminService.calculateOverallStats(allUsers);
    const message = adminService.formatStatsForTelegram(stats);
    await ctx.reply(message, { parse_mode: 'HTML' });
    return;
  }

  // Action: top users
  if (action === 'top') {
    const topUsers = adminService.getTopUsers(allUsers, 10);
    const message = adminService.formatTopUsersForTelegram(topUsers);
    await ctx.reply(message, { parse_mode: 'HTML' });
    return;
  }

  // Action: recent users
  if (action === 'recent') {
    const recentUsers = adminService.getRecentUsers(allUsers, 7);
    const message = adminService.formatRecentUsersForTelegram(recentUsers, 7);
    await ctx.reply(message, { parse_mode: 'HTML' });
    return;
  }

  // Action: users by date
  if (action === 'dates') {
    const usersByDate = adminService.getUsersByDate(allUsers);
    const message = adminService.formatUsersByDateForTelegram(usersByDate);
    await ctx.reply(message, { parse_mode: 'HTML' });
    return;
  }

  // Action: help
  if (action === 'help') {
    const helpMessage = `📖 <b>АДМИНСКИЕ КОМАНДЫ</b>

/admin - общая статистика
/admin stats - общая статистика (то же самое)
/admin top - топ-10 пользователей
/admin recent - новые пользователи (7 дней)
/admin dates - регистрации по дням
/admin help - эта справка

💡 Также можно использовать:
   node scripts/analytics.js - подробная аналитика`;

    await ctx.reply(helpMessage, { parse_mode: 'HTML' });
    return;
  }

  // Unknown action
  await ctx.reply('❌ Неизвестная команда. Используй /admin help');
}

/**
 * Register all command handlers
 */
function registerCommands(bot) {
  bot.command('start', handleStart);
  bot.command('stats', handleStats);
  bot.command('weak', handleWeak);
  bot.command('rating', handleRating);
  bot.command('reset', handleReset);
  bot.command('lang', handleLang);
  bot.command('admin', handleAdmin);

  // Text handler is registered in bot.js to avoid circular dependencies
}

module.exports = {
  registerCommands,
  sendNextTask,
  sendTaskMessage
};
