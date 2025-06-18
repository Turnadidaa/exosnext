const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Base de données en mémoire
let todos = [];
let nextId = 1;

// Créer un nouveau todo
app.post('/api/todos', (req, res) => {
  const { title, completed } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Le titre est requis.' });
  }

  const newTodo = {
    id: nextId++,
    title,
    completed: completed ?? false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Obtenir tous les todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Obtenir un todo spécifique
app.get('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: 'Todo non trouvé.' });
  }

  res.json(todo);
});

// Mettre à jour un todo
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;

  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo non trouvé.' });
  }

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// Supprimer un todo
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Todo non trouvé.' });
  }

  const deleted = todos.splice(index, 1);
  res.json(deleted[0]);
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur Todo API démarré sur http://localhost:${PORT}`);
});
