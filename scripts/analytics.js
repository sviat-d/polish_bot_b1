#!/usr/bin/env node

/**
 * Analytics Script for Polish B1 Exam Bot
 *
 * Shows statistics about users, their progress, and activity
 *
 * Usage:
 *   node scripts/analytics.js               # Show all stats
 *   node scripts/analytics.js --users       # Show user list
 *   node scripts/analytics.js --detailed    # Show detailed stats
 */

const fs = require('fs');
const path = require('path');

const USERS_DIR = path.join(__dirname, '..', 'data', 'users');

/**
 * Load all users from files
 */
function loadAllUsers() {
  if (!fs.existsSync(USERS_DIR)) {
    console.log('❌ Users directory not found:', USERS_DIR);
    console.log('💡 Make sure Railway Volume is mounted correctly');
    return [];
  }

  const files = fs.readdirSync(USERS_DIR);
  const users = [];

  for (const file of files) {
    if (!file.endsWith('.json')) continue;

    try {
      const filePath = path.join(USERS_DIR, file);
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
    languagePreference: {
      ru: 0,
      pl: 0
    },
    ratingEnabled: 0,
    usersByDate: {},
    taskCompletion: {}
  };

  for (const user of users) {
    // Count answers
    const answerCount = user.answers?.length || 0;
    stats.totalAnswers += answerCount;

    if (answerCount === 0) {
      stats.newUsers++;
    } else {
      stats.activeUsers++;
    }

    // Count correct/incorrect
    for (const answer of user.answers || []) {
      if (answer.isCorrect) {
        stats.totalCorrect++;
      } else {
        stats.totalIncorrect++;
      }
    }

    // Count completed tasks
    const completedCount = user.completedTasks?.length || 0;
    stats.averageProgress += completedCount;

    // Language preference
    const lang = user.language || 'ru';
    stats.languagePreference[lang]++;

    // Rating enabled
    if (user.ratingEnabled) {
      stats.ratingEnabled++;
    }

    // Users by date
    const createdDate = user.createdAt?.split('T')[0] || 'unknown';
    stats.usersByDate[createdDate] = (stats.usersByDate[createdDate] || 0) + 1;

    // Task completion distribution
    const bracket = Math.floor(completedCount / 10) * 10;
    const key = `${bracket}-${bracket + 9}`;
    stats.taskCompletion[key] = (stats.taskCompletion[key] || 0) + 1;
  }

  if (stats.totalUsers > 0) {
    stats.averageProgress = Math.round(stats.averageProgress / stats.totalUsers);
    stats.accuracyRate = stats.totalAnswers > 0
      ? Math.round((stats.totalCorrect / stats.totalAnswers) * 100)
      : 0;
  }

  return stats;
}

/**
 * Find top users by completed tasks
 */
function getTopUsers(users, limit = 10) {
  return users
    .map(u => ({
      chatId: u.chatId,
      username: u.username || 'N/A',
      firstName: u.firstName || 'N/A',
      completedTasks: u.completedTasks?.length || 0,
      answers: u.answers?.length || 0,
      accuracy: calculateAccuracy(u),
      language: u.language || 'ru',
      createdAt: u.createdAt
    }))
    .sort((a, b) => b.completedTasks - a.completedTasks)
    .slice(0, limit);
}

/**
 * Calculate user accuracy
 */
function calculateAccuracy(user) {
  if (!user.answers || user.answers.length === 0) return 0;

  const correct = user.answers.filter(a => a.isCorrect).length;
  return Math.round((correct / user.answers.length) * 100);
}

/**
 * Find recent users
 */
function getRecentUsers(users, days = 7) {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);

  return users
    .filter(u => {
      if (!u.createdAt) return false;
      return new Date(u.createdAt) >= cutoffDate;
    })
    .map(u => ({
      chatId: u.chatId,
      username: u.username || 'N/A',
      firstName: u.firstName || 'N/A',
      createdAt: u.createdAt,
      completedTasks: u.completedTasks?.length || 0
    }))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

/**
 * Display statistics
 */
function displayStats(users, options = {}) {
  const stats = calculateOverallStats(users);

  console.log('\n' + '='.repeat(60));
  console.log('📊  POLISH B1 EXAM BOT — ANALYTICS');
  console.log('='.repeat(60) + '\n');

  // Overall Stats
  console.log('📈 OVERALL STATISTICS:');
  console.log(`   Total Users:        ${stats.totalUsers}`);
  console.log(`   New Users (0 ans):  ${stats.newUsers}`);
  console.log(`   Active Users:       ${stats.activeUsers}`);
  console.log(`   Total Answers:      ${stats.totalAnswers}`);
  console.log(`   Correct:            ${stats.totalCorrect} (${stats.accuracyRate}%)`);
  console.log(`   Incorrect:          ${stats.totalIncorrect}`);
  console.log(`   Avg Progress:       ${stats.averageProgress} tasks`);
  console.log('');

  // Language Preference
  console.log('🌐 LANGUAGE PREFERENCE:');
  console.log(`   Russian (RU):       ${stats.languagePreference.ru} users`);
  console.log(`   Polish (PL):        ${stats.languagePreference.pl} users`);
  console.log('');

  // Rating
  console.log('⭐ RATING FEATURE:');
  console.log(`   Enabled:            ${stats.ratingEnabled} users`);
  console.log('');

  // Users by date
  console.log('📅 NEW USERS BY DATE (last 7 days):');
  const sortedDates = Object.keys(stats.usersByDate)
    .sort()
    .reverse()
    .slice(0, 7);

  for (const date of sortedDates) {
    console.log(`   ${date}:           ${stats.usersByDate[date]} users`);
  }
  console.log('');

  // Task completion distribution
  console.log('✅ TASK COMPLETION DISTRIBUTION:');
  const sortedBrackets = Object.keys(stats.taskCompletion)
    .sort((a, b) => {
      const aNum = parseInt(a.split('-')[0]);
      const bNum = parseInt(b.split('-')[0]);
      return aNum - bNum;
    });

  for (const bracket of sortedBrackets) {
    const count = stats.taskCompletion[bracket];
    const bar = '█'.repeat(Math.ceil(count / 2));
    console.log(`   ${bracket.padEnd(10)} ${bar} ${count}`);
  }
  console.log('');

  // Top Users
  if (options.showTop) {
    const topUsers = getTopUsers(users, 10);
    console.log('🏆 TOP 10 USERS (by completed tasks):');
    console.log('   Rank | Chat ID    | Username      | Tasks | Accuracy | Lang');
    console.log('   ' + '-'.repeat(60));

    topUsers.forEach((user, index) => {
      const rank = (index + 1).toString().padStart(4);
      const chatId = user.chatId.toString().padEnd(10);
      const username = (user.username || 'N/A').padEnd(13).substring(0, 13);
      const tasks = user.completedTasks.toString().padStart(5);
      const accuracy = `${user.accuracy}%`.padStart(8);
      const lang = user.language.padEnd(4);

      console.log(`   ${rank} | ${chatId} | ${username} | ${tasks} | ${accuracy} | ${lang}`);
    });
    console.log('');
  }

  // Recent Users
  if (options.showRecent) {
    const recentUsers = getRecentUsers(users, 7);
    console.log(`👤 RECENT USERS (last 7 days): ${recentUsers.length}`);

    if (recentUsers.length > 0) {
      console.log('   Chat ID    | Username      | Created At          | Tasks');
      console.log('   ' + '-'.repeat(60));

      recentUsers.slice(0, 15).forEach(user => {
        const chatId = user.chatId.toString().padEnd(10);
        const username = (user.username || 'N/A').padEnd(13).substring(0, 13);
        const date = user.createdAt.substring(0, 19).replace('T', ' ');
        const tasks = user.completedTasks.toString().padStart(5);

        console.log(`   ${chatId} | ${username} | ${date} | ${tasks}`);
      });
    }
    console.log('');
  }

  // All Users List
  if (options.showAllUsers) {
    console.log(`👥 ALL USERS (${users.length}):`)
    console.log('   Chat ID    | Username      | First Name    | Tasks | Answers | Lang');
    console.log('   ' + '-'.repeat(75));

    users
      .sort((a, b) => (b.completedTasks?.length || 0) - (a.completedTasks?.length || 0))
      .forEach(user => {
        const chatId = user.chatId.toString().padEnd(10);
        const username = (user.username || 'N/A').padEnd(13).substring(0, 13);
        const firstName = (user.firstName || 'N/A').padEnd(13).substring(0, 13);
        const tasks = (user.completedTasks?.length || 0).toString().padStart(5);
        const answers = (user.answers?.length || 0).toString().padStart(7);
        const lang = (user.language || 'ru').padEnd(4);

        console.log(`   ${chatId} | ${username} | ${firstName} | ${tasks} | ${answers} | ${lang}`);
      });
    console.log('');
  }

  console.log('='.repeat(60));
}

/**
 * Export user data to JSON
 */
function exportToJSON(users, filename = 'users-export.json') {
  const exportPath = path.join(__dirname, '..', filename);

  const exportData = {
    exportedAt: new Date().toISOString(),
    totalUsers: users.length,
    users: users.map(u => ({
      chatId: u.chatId,
      username: u.username || null,
      firstName: u.firstName || null,
      lastName: u.lastName || null,
      languageCode: u.languageCode || null,
      language: u.language || 'ru',
      createdAt: u.createdAt,
      updatedAt: u.updatedAt,
      completedTasks: u.completedTasks?.length || 0,
      totalAnswers: u.answers?.length || 0,
      correctAnswers: u.answers?.filter(a => a.isCorrect).length || 0,
      accuracy: calculateAccuracy(u),
      ratingEnabled: u.ratingEnabled || false
    }))
  };

  fs.writeFileSync(exportPath, JSON.stringify(exportData, null, 2), 'utf-8');
  console.log(`✅ Exported user data to: ${exportPath}`);
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);

  const options = {
    showTop: args.includes('--top') || args.includes('--detailed'),
    showRecent: args.includes('--recent') || args.includes('--detailed'),
    showAllUsers: args.includes('--users') || args.includes('--all'),
    export: args.includes('--export')
  };

  // Default: show basic stats + top + recent
  if (args.length === 0 || args.includes('--detailed')) {
    options.showTop = true;
    options.showRecent = true;
  }

  const users = loadAllUsers();

  if (users.length === 0) {
    console.log('\n⚠️  No users found!');
    console.log('💡 Make sure:');
    console.log('   1. Railway Volume is mounted correctly');
    console.log('   2. At least one user has started the bot');
    console.log('   3. Path is correct:', USERS_DIR);
    return;
  }

  displayStats(users, options);

  if (options.export) {
    exportToJSON(users);
  }

  // Show help
  if (args.includes('--help')) {
    console.log('\n📖 USAGE:');
    console.log('   node scripts/analytics.js              # Basic stats + top + recent');
    console.log('   node scripts/analytics.js --detailed    # All stats');
    console.log('   node scripts/analytics.js --users       # List all users');
    console.log('   node scripts/analytics.js --top         # Show top users');
    console.log('   node scripts/analytics.js --recent      # Show recent users');
    console.log('   node scripts/analytics.js --export      # Export to JSON');
    console.log('');
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { loadAllUsers, calculateOverallStats, getTopUsers, getRecentUsers };
