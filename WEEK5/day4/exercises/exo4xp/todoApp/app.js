

import { TodoList } from './todo.js';

const myTodos = new TodoList();

// Ajouter des tâches
myTodos.addTask("Apprendre les modules ES6");
myTodos.addTask("Faire l'exercice 4");
myTodos.addTask("Boire un café");

// Marquer une tâche comme complétée
myTodos.markComplete(1);

// Afficher toutes les tâches
console.log("📋 Mes tâches :");
myTodos.listTasks();
