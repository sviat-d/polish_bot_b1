const { Telegraf } = require('telegraf');
const config = require('./config');
const { registerCommands } = require('./handlers/commands');
const { registerCallbacks, handleTextAnswer } = require('./handlers/callbacks');
const messages = require('./utils/messages');

/**
 * Create and configure bot instance
 */
function createBot() {
  if (!config.BOT_TOKEN) {
    throw new Error('TELEGRAM_BOT token not found in environment variables');
  }

  const bot = new Telegraf(config.BOT_TOKEN);

  // Error handling
  bot.catch((err, ctx) => {
    console.error('Bot error:', err);
    ctx.reply('Proizoshla oshibka. Poprobuj eshchyo raz.');
  });

  // Register handlers
  registerCommands(bot);
  registerCallbacks(bot);

  // Handle text messages (answers from ReplyKeyboard)
  bot.on('text', async (ctx) => {
    // Ignore commands
    if (ctx.message.text.startsWith('/')) {
      await ctx.reply(messages.unknownCommand());
      return;
    }

    // Try to handle as answer
    const handled = await handleTextAnswer(ctx);

    if (!handled) {
      await ctx.reply(`Ispol'zuj knopki dlya otveta ili /start dlya nachala.`);
    }
  });

  return bot;
}

module.exports = { createBot };
