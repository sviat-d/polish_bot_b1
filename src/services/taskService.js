const { getTasks, getTopics } = require('../data/taskLoader');

let tasksCache = null;

/**
 * Get all tasks (cached)
 */
function getAllTasks() {
  if (!tasksCache) {
    tasksCache = getTasks();
  }
  return tasksCache;
}

/**
 * Get task by ID
 */
function getTaskById(taskId) {
  const tasks = getAllTasks();
  return tasks.find(t => t.id === taskId);
}

/**
 * Get total number of tasks
 */
function getTotalTasksCount() {
  return getAllTasks().length;
}

/**
 * Get next random task for user
 * @param {object} user - User object
 * @param {string|null} filterTopic - Optional topic to filter by
 * @returns {object|null} - Task or null if all completed
 */
function getNextTask(user, filterTopic = null) {
  const tasks = getAllTasks();

  // Filter out completed tasks
  let availableTasks = tasks.filter(
    task => !user.completedTasks.includes(task.id)
  );

  // Filter by topic if in weak topic mode or filter specified
  const topicFilter = filterTopic || (user.weakTopicMode?.active ? user.weakTopicMode.topic : null);

  if (topicFilter) {
    availableTasks = availableTasks.filter(
      task => task.topic === topicFilter
    );
  }

  // If no tasks available
  if (availableTasks.length === 0) {
    return null;
  }

  // Random selection
  const randomIndex = Math.floor(Math.random() * availableTasks.length);
  return availableTasks[randomIndex];
}

/**
 * Get count of remaining tasks
 */
function getRemainingTasksCount(user, filterTopic = null) {
  const tasks = getAllTasks();

  let availableTasks = tasks.filter(
    task => !user.completedTasks.includes(task.id)
  );

  if (filterTopic) {
    availableTasks = availableTasks.filter(
      task => task.topic === filterTopic
    );
  }

  return availableTasks.length;
}

/**
 * Get tasks for a specific topic
 */
function getTasksByTopic(topic) {
  const tasks = getAllTasks();
  return tasks.filter(t => t.topic === topic);
}

/**
 * Get all unique topics
 */
function getAllTopics() {
  return getTopics(getAllTasks());
}

/**
 * Refresh tasks cache
 */
function refreshTasksCache() {
  tasksCache = null;
  getAllTasks();
}

module.exports = {
  getAllTasks,
  getTaskById,
  getTotalTasksCount,
  getNextTask,
  getRemainingTasksCount,
  getTasksByTopic,
  getAllTopics,
  refreshTasksCache
};
