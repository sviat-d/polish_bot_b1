const userService = require('../services/userService');
const taskService = require('../services/taskService');
const messages = require('../utils/messages');
const keyboard = require('../utils/keyboard');
const { sendNextTask } = require('./commands');
const config = require('../config');

/**
 * Handle text answer (from ReplyKeyboard)
 */
async function handleTextAnswer(ctx) {
  const chatId = ctx.chat.id;
  const user = userService.getOrCreateUser(chatId);
  const text = ctx.message.text;

  // Extract answer letter from text like "A) option text"
  const answerMatch = text.match(/^([A-D])\)/i);
  if (!answerMatch) {
    return false; // Not an answer
  }

  const answer = answerMatch[1].toUpperCase();

  // Get current task
  if (!user.currentTaskId) {
    await ctx.reply('Задание не найдено. Напиши /start', keyboard.removeKeyboard());
    return true;
  }

  const task = taskService.getTaskById(user.currentTaskId);

  if (!task) {
    await ctx.reply('Задание не найдено. Напиши /start', keyboard.removeKeyboard());
    return true;
  }

  const isCorrect = answer === task.correctAnswer;

  // Record answer
  userService.recordAnswer(
    chatId,
    task.id,
    task.topic,
    isCorrect,
    answer
  );

  // Show result with user's language preference
  const userLanguage = user.language || 'ru';
  const resultText = isCorrect
    ? messages.correctAnswer(task, userLanguage)
    : messages.incorrectAnswer(task, answer, userLanguage);

  await ctx.reply(resultText, keyboard.removeKeyboard());

  // Get updated user
  const updatedUser = userService.getOrCreateUser(chatId);

  // Check if should suggest weak topic training
  const weakest = userService.findWeakestTopic(updatedUser);

  if (weakest && !updatedUser.weakTopicMode?.active) {
    // Check if this topic just became weak (within last few answers)
    const recentAnswers = updatedUser.answers.slice(-5);
    const recentWeakTopic = recentAnswers.filter(a => a.topic === weakest.topic && !a.isCorrect).length >= 2;

    if (recentWeakTopic) {
      await ctx.reply(
        messages.weakTopicSuggestion(weakest.topic, weakest.errorRate),
        keyboard.weakTopicKeyboard()
      );
      return true;
    }
  }

  // Check if should ask about rating (re-ask after N tasks)
  if (!updatedUser.ratingEnabled &&
      updatedUser.tasksSinceRatingAsk >= config.RATING_REASK_AFTER &&
      updatedUser.ratingAskedAt) {
    userService.recordRatingAsked(chatId);
    await ctx.reply(messages.ratingAskLast(), keyboard.ratingAskKeyboard());
    return true;
  }

  // If rating enabled, ask for rating
  if (updatedUser.ratingEnabled) {
    await ctx.reply(messages.ratingPrompt(), keyboard.ratingKeyboard());
    return true;
  }

  // Auto-send next task
  await sendNextTask(ctx, updatedUser);
  return true;
}

/**
 * Handle rating callback (rate:1, rate:2, etc.)
 */
async function handleRate(ctx) {
  const chatId = ctx.chat.id;
  const ratingStr = ctx.callbackQuery.data.split(':')[1];

  await ctx.answerCbQuery();

  // Remove rating keyboard
  try {
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] });
  } catch (e) {
    // Ignore
  }

  if (ratingStr !== 'skip') {
    const rating = parseInt(ratingStr);
    userService.updateLastAnswerRating(chatId, rating);
    await ctx.reply(messages.ratingThanks());
  }

  // Send next task
  const user = userService.getOrCreateUser(chatId);
  await sendNextTask(ctx, user);
}

/**
 * Handle rating enable callback
 */
async function handleRatingEnable(ctx) {
  const chatId = ctx.chat.id;
  const choice = ctx.callbackQuery.data.split(':')[1];

  await ctx.answerCbQuery();

  // Remove keyboard
  try {
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] });
  } catch (e) {
    // Ignore
  }

  if (choice === 'yes') {
    userService.enableRating(chatId);
    await ctx.reply(messages.ratingEnabled());
  } else {
    await ctx.reply(messages.ratingDisabled());
  }

  // Send first task
  const user = userService.getOrCreateUser(chatId);
  await sendNextTask(ctx, user);
}

/**
 * Handle weak topic callbacks
 */
async function handleWeak(ctx) {
  const chatId = ctx.chat.id;
  const action = ctx.callbackQuery.data.split(':')[1];

  await ctx.answerCbQuery();

  // Remove keyboard
  try {
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] });
  } catch (e) {
    // Ignore
  }

  const user = userService.getOrCreateUser(chatId);

  if (action === 'start') {
    const weakest = userService.findWeakestTopic(user);

    if (weakest) {
      userService.setWeakTopicMode(chatId, true, weakest.topic);
      await ctx.reply(messages.weakTopicStart(weakest.topic));

      const updatedUser = userService.getOrCreateUser(chatId);
      await sendNextTask(ctx, updatedUser);
    }
  } else if (action === 'exit') {
    userService.setWeakTopicMode(chatId, false);
    await ctx.reply(messages.weakTopicExit());

    const updatedUser = userService.getOrCreateUser(chatId);
    await sendNextTask(ctx, updatedUser);
  } else {
    // Skip - continue normal
    await sendNextTask(ctx, user);
  }
}

/**
 * Handle reset callbacks
 */
async function handleReset(ctx) {
  const chatId = ctx.chat.id;
  const action = ctx.callbackQuery.data.split(':')[1];

  await ctx.answerCbQuery();

  // Remove keyboard
  try {
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] });
  } catch (e) {
    // Ignore
  }

  if (action === 'confirm') {
    userService.resetUser(chatId);
    await ctx.reply(messages.resetDone());
  } else {
    await ctx.reply(messages.resetCancelled());
  }
}

/**
 * Register all callback handlers
 */
function registerCallbacks(bot) {
  // Rating callbacks (inline)
  bot.action(/^rate:/, handleRate);
  bot.action(/^rating_enable:/, handleRatingEnable);

  // Weak topic callbacks (inline)
  bot.action(/^weak:/, handleWeak);

  // Reset callbacks (inline)
  bot.action(/^reset:/, handleReset);
}

module.exports = {
  registerCallbacks,
  handleTextAnswer
};
