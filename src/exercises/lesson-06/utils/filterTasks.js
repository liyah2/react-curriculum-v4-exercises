export function filterTasks(tasks, filter) {
  if (filter === 'completed') {
    return tasks.filter((tasks) => tasks.completed);
  }

  if (filter === 'pending') {
    return tasks.filter((task) => !task.completed);
  }

  return tasks;
}
