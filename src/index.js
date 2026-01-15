const { createBot } = require('./bot');
const { getTasks } = require('./data/taskLoader');

async function main() {
  console.log('Starting Polish B1 Exam Prep Bot...');

  // Load tasks on startup
  console.log('Loading tasks...');
  const tasks = getTasks();
  console.log(`Loaded ${tasks.length} tasks`);

  // Create and start bot
  const bot = createBot();

  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));

  // Start polling
  console.log('Bot is starting...');
  await bot.launch();
  console.log('Bot is running!');
}

main().catch(err => {
  console.error('Failed to start bot:', err);
  process.exit(1);
});
