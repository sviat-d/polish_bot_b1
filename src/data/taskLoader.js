const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');
const config = require('../config');
const pdfTasks = require('./pdfTasks');

/**
 * Parse options from task_text like "A) on B) jego C) go D) mu"
 */
function parseOptions(taskText) {
  // First, try to find options pattern anywhere in the text
  // Pattern: A) ... B) ... C) ... (D) ...)
  const optionsPattern = /\s*(A\)\s*.+?)$/i;

  let question = taskText;
  let optionsText = '';

  // Find where options start
  const optionStartMatch = taskText.match(/\s+A\)\s*/);

  if (optionStartMatch) {
    const splitIndex = taskText.indexOf(optionStartMatch[0]);
    question = taskText.substring(0, splitIndex).trim();
    optionsText = taskText.substring(splitIndex).trim();
  } else {
    // Try splitting by newline
    const lines = taskText.split('\n').map(l => l.trim()).filter(Boolean);

    for (const line of lines) {
      if (line.match(/^A\)/i)) {
        optionsText = line;
      } else {
        question += (question && !question.endsWith(' ') ? ' ' : '') + line;
      }
    }
  }

  // Clean up question - remove leading/trailing whitespace and newlines
  question = question.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();

  // Parse options from "A) on B) jego C) go D) mu"
  const options = [];

  // More robust regex that handles various formats
  const optionMatches = optionsText.matchAll(/([A-D])\)\s*([^A-D)]+?)(?=\s*[A-D]\)|$)/gi);

  for (const match of optionMatches) {
    const text = match[2].trim();
    if (text) {
      options.push({
        label: match[1].toUpperCase(),
        text: text
      });
    }
  }

  // If still no options, try alternative pattern (options might be comma-separated or different)
  if (options.length === 0) {
    // Try to find individual options
    const altMatches = optionsText.matchAll(/([A-D])\)\s*(\S+)/gi);
    for (const match of altMatches) {
      options.push({
        label: match[1].toUpperCase(),
        text: match[2].trim()
      });
    }
  }

  return { question, options };
}

/**
 * Find correct answer label by matching text
 */
function findCorrectAnswerLabel(options, correctText) {
  const normalizedCorrect = correctText.trim().toLowerCase();

  for (const opt of options) {
    if (opt.text.toLowerCase() === normalizedCorrect) {
      return opt.label;
    }
  }

  // If exact match not found, try partial match
  for (const opt of options) {
    if (opt.text.toLowerCase().includes(normalizedCorrect) ||
        normalizedCorrect.includes(opt.text.toLowerCase())) {
      return opt.label;
    }
  }

  return 'A'; // Fallback
}

/**
 * Load and parse CSV tasks
 */
function loadCSVTasks() {
  const csvPath = config.PATHS.CSV_FILE;

  if (!fs.existsSync(csvPath)) {
    console.error('CSV file not found:', csvPath);
    return [];
  }

  const csvContent = fs.readFileSync(csvPath, 'utf-8');

  // Remove BOM if present
  const cleanContent = csvContent.replace(/^\uFEFF/, '');

  const records = parse(cleanContent, {
    columns: true,
    skip_empty_lines: true,
    relax_quotes: true,
    relax_column_count: true
  });

  const tasks = [];

  for (const row of records) {
    try {
      const { question, options } = parseOptions(row.task_text || '');

      if (!question || options.length === 0) {
        console.warn('Skipping task with invalid format:', row.id);
        continue;
      }

      const correctAnswer = findCorrectAnswerLabel(options, row.correct_answer || '');

      tasks.push({
        id: `csv_${row.id}`,
        source: 'csv',
        question: question,
        options: options,
        correctAnswer: correctAnswer,
        explanationRu: row.explanation_ru || row.explanation_pl || '',
        explanationPl: row.explanation_pl || '',
        topic: row.topic || 'General',
        section: row.section || '',
        difficulty: 'medium'
      });
    } catch (err) {
      console.warn('Error parsing task:', row.id, err.message);
    }
  }

  return tasks;
}

/**
 * Load all tasks (CSV + PDF)
 */
function loadAllTasks() {
  const csvTasks = loadCSVTasks();
  const allTasks = [...csvTasks, ...pdfTasks];

  console.log(`Loaded ${csvTasks.length} CSV tasks and ${pdfTasks.length} PDF tasks`);
  console.log(`Total: ${allTasks.length} tasks`);

  return allTasks;
}

/**
 * Get unique topics from all tasks
 */
function getTopics(tasks) {
  const topics = new Set();
  for (const task of tasks) {
    if (task.topic) {
      topics.add(task.topic);
    }
  }
  return Array.from(topics);
}

/**
 * Save tasks to JSON file (for caching)
 */
function saveTasks(tasks) {
  const tasksPath = config.PATHS.TASKS_FILE;
  const dir = path.dirname(tasksPath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(tasksPath, JSON.stringify(tasks, null, 2), 'utf-8');
  console.log('Tasks saved to:', tasksPath);
}

/**
 * Load tasks from JSON cache or regenerate
 */
function getTasks() {
  const tasksPath = config.PATHS.TASKS_FILE;

  // Always regenerate for now (can be cached later)
  const tasks = loadAllTasks();
  saveTasks(tasks);

  return tasks;
}

module.exports = {
  loadAllTasks,
  loadCSVTasks,
  getTasks,
  getTopics,
  saveTasks
};
