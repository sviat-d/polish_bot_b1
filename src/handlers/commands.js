const userService = require('../services/userService');
const taskService = require('../services/taskService');
const messages = require('../utils/messages');
const keyboard = require('../utils/keyboard');

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
  const user = userService.getOrCreateUser(chatId);
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
  const user = userService.getOrCreateUser(chatId);

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
  const user = userService.getOrCreateUser(chatId);

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
  const user = userService.getOrCreateUser(chatId);

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
 * Register all command handlers
 */
function registerCommands(bot) {
  bot.command('start', handleStart);
  bot.command('stats', handleStats);
  bot.command('weak', handleWeak);
  bot.command('rating', handleRating);
  bot.command('reset', handleReset);
  bot.command('lang', handleLang);

  // Text handler is registered in bot.js to avoid circular dependencies
}

module.exports = {
  registerCommands,
  sendNextTask,
  sendTaskMessage
};
