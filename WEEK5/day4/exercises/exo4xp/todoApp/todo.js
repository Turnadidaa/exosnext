// todo.js

export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    this.tasks.push({ description, completed: false });
  }

  markComplete(index) {
    if (this.tasks[index]) {
      this.tasks[index].completed = true;
    } else {
      console.log(`❌ Task at index ${index} does not exist.`);
    }
  }

  listTasks() {
    this.tasks.forEach((task, i) => {
      const status = task.completed ? "✅" : "⏳";
      console.log(`${i}. ${status} ${task.description}`);
    });
  }
}
