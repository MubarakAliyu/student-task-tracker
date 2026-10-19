import {
  addTask,
  completeTask,
  createTask,
  deleteTask,
  getPendingTasks,
} from './tasks.js';

let tasks = [];
tasks = addTask(tasks, createTask({ id: 'task-1', title: 'Read the project brief' }));
tasks = addTask(tasks, createTask({ id: 'task-2', title: 'Write unit tests' }));
tasks = completeTask(tasks, 'task-1');

console.log('All tasks:');
console.log(JSON.stringify(tasks, null, 2));
console.log('\nPending tasks:');
console.log(JSON.stringify(getPendingTasks(tasks), null, 2));

tasks = deleteTask(tasks, 'task-2');
console.log('\nTasks after deleting task-2:');
console.log(JSON.stringify(tasks, null, 2));
