require('dotenv').config();
const path = require('path');

module.exports = {
  BOT_TOKEN: process.env.TELEGRAM_BOT,

  // Admin chat IDs (comma-separated list in env)
  ADMIN_CHAT_IDS: process.env.ADMIN_CHAT_IDS
    ? process.env.ADMIN_CHAT_IDS.split(',').map(id => parseInt(id.trim()))
    : [],

  PATHS: {
    DATA_DIR: path.join(__dirname, '..', 'data'),
    USERS_DIR: path.join(__dirname, '..', 'data', 'users'),
    TASKS_FILE: path.join(__dirname, '..', 'data', 'tasks.json'),
  },

  // Weak topic threshold
  WEAK_TOPIC_ERROR_RATE: 50, // %
  WEAK_TOPIC_MIN_ATTEMPTS: 5,

  // Rating re-ask after N tasks
  RATING_REASK_AFTER: 20,
};
