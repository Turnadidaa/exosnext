

const express = require('express');
const router = express.Router();

let todos = [
    { id: 1, task: 'Learn Node.js', completed: false },
    { id: 2, task: 'Build a to-do API', completed: false }
];
let nextId = 3; // To simulate auto-incrementing IDs


router.get('/', (req, res) => {
  res.json(todos);
});

// POST - Add a new to-do item
router.post('/', (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: 'Task is required' });
  }

  const newTodo = {
    id: nextId++,
    task: task,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT - Update a to-do item by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;

  const todo = todos.find(t => t.id === parseInt(id));
  if (!todo) {
    return res.status(404).json({ error: 'To-do item not found' });
  }

  // Update fields if they are provided in the request body
  if (task !== undefined) {
    todo.task = task;
  }
  if (completed !== undefined) {
    todo.completed = completed;
  }

  res.json(todo);
});

// DELETE a to-do item by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex(t => t.id === parseInt(id));

  if (todoIndex === -1) {
    return res.status(404).json({ error: 'To-do item not found' });
  }

  // Remove the item from the array
  todos.splice(todoIndex, 1);
  
  // Respond with a success message (and no content)
  res.status(204).send();
});


module.exports = router;