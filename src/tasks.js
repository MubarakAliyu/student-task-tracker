/**
 * Create a task after validating its required fields.
 * @param {{ id: string, title: string }} input
 * @returns {{ id: string, title: string, completed: boolean }}
 */
export function createTask({ id, title } = {}) {
  if (typeof id !== 'string' || id.trim() === '') {
    throw new TypeError('Task id must be a non-empty string.');
  }

  if (typeof title !== 'string' || title.trim() === '') {
    throw new TypeError('Task title must be a non-empty string.');
  }

  return {
    id: id.trim(),
    title: title.trim(),
    completed: false,
  };
}

/**
 * Add a task to a new array, rejecting duplicate IDs.
 * @param {Array<{ id: string, title: string, completed: boolean }>} tasks
 * @param {{ id: string, title: string, completed: boolean }} task
 * @returns {Array<{ id: string, title: string, completed: boolean }>}
 */
export function addTask(tasks, task) {
  if (!Array.isArray(tasks)) {
    throw new TypeError('Tasks must be an array.');
  }

  if (!task || typeof task.id !== 'string' || typeof task.title !== 'string') {
    throw new TypeError('Task must include a string id and title.');
  }

  if (tasks.some((item) => item.id === task.id)) {
    throw new Error(`A task with id "${task.id}" already exists.`);
  }

  return [...tasks, { ...task }];
}

/** Mark one task complete without mutating the original array. */
export function completeTask(tasks, taskId) {
  if (!Array.isArray(tasks)) {
    throw new TypeError('Tasks must be an array.');
  }

  return tasks.map((task) => (
    task.id === taskId ? { ...task, completed: true } : task
  ));
}

/** Remove a task by ID without mutating the original array. */
export function deleteTask(tasks, taskId) {
  if (!Array.isArray(tasks)) {
    throw new TypeError('Tasks must be an array.');
  }

  return tasks.filter((task) => task.id !== taskId);
}

/** Return tasks that have not yet been completed. */
export function getPendingTasks(tasks) {
  if (!Array.isArray(tasks)) {
    throw new TypeError('Tasks must be an array.');
  }

  return tasks.filter((task) => !task.completed);
}
