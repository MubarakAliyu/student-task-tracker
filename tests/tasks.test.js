import test from 'node:test';
import assert from 'node:assert/strict';
import {
  addTask,
  completeTask,
  createTask,
  deleteTask,
  getPendingTasks,
} from '../src/tasks.js';

const firstTask = createTask({ id: '1', title: 'Finish assignment' });
const secondTask = createTask({ id: '2', title: 'Review notes' });

test('createTask trims values and starts as incomplete', () => {
  assert.deepEqual(createTask({ id: '  1 ', title: '  Read docs  ' }), {
    id: '1',
    title: 'Read docs',
    completed: false,
  });
});

test('createTask rejects an empty ID', () => {
  assert.throws(() => createTask({ id: ' ', title: 'Valid title' }), /Task id/);
});

test('createTask rejects an empty title', () => {
  assert.throws(() => createTask({ id: '1', title: ' ' }), /Task title/);
});

test('addTask adds a task without changing the original array', () => {
  const original = [firstTask];
  const result = addTask(original, secondTask);

  assert.equal(result.length, 2);
  assert.equal(original.length, 1);
  assert.equal(result[1].id, '2');
});

test('addTask rejects duplicate IDs', () => {
  assert.throws(() => addTask([firstTask], firstTask), /already exists/);
});

test('completeTask marks the matching task complete', () => {
  const result = completeTask([firstTask, secondTask], '2');

  assert.equal(result[1].completed, true);
  assert.equal(result[0].completed, false);
  assert.equal(secondTask.completed, false);
});

test('deleteTask removes only the matching task', () => {
  assert.deepEqual(deleteTask([firstTask, secondTask], '1'), [secondTask]);
});

test('getPendingTasks excludes completed tasks', () => {
  const completed = { ...firstTask, completed: true };
  assert.deepEqual(getPendingTasks([completed, secondTask]), [secondTask]);
});

test('task operations reject a non-array collection', () => {
  assert.throws(() => addTask({}, firstTask), /must be an array/);
  assert.throws(() => completeTask({}, '1'), /must be an array/);
  assert.throws(() => deleteTask({}, '1'), /must be an array/);
  assert.throws(() => getPendingTasks({}), /must be an array/);
});
