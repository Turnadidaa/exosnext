const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

let books = [
  { id: 1, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
];

app.get('/api/books', (req, res) => {
  res.json(books);
});

app.get('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.status(200).json(book);
});

app.post('/api/books', (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res.status(400).json({ error: 'Title, author, and year are required' });
  }
  const newBook = {
    id: books.length + 1,
    title,
    author,
    year
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.put('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, year } = req.body;
  const bookIndex = books.findIndex(b => b.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  if (!title || !author || !year) {
    return res.status(400).json({ error: 'Title, author, and year are required' });
  }

  const updatedBook = { id, title, author, year };
  books[bookIndex] = updatedBook;
  res.status(200).json(updatedBook);
});

app.delete('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const bookIndex = books.findIndex(b => b.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  books.splice(bookIndex, 1);
  res.status(204).send();
});

// Middleware pour routes non trouvées (404)
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Middleware pour gérer les erreurs serveur
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Book API listening at http://localhost:${port}`);
});
