// Step 4: Create a Router Module for Books

const express = require('express');
const router = express.Router();

// Sample in-memory "database" for storing books.
// In a real-world application, this would be replaced with a proper database.
let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];
let nextId = 3; // Simulates auto-incrementing unique IDs

// GET all books
// Responds with the full list of books in JSON format.
router.get('/', (req, res) => {
  res.json(books);
});

// POST - Add a new book
// Creates a new book based on the request body.
router.post('/', (req, res) => {
  const { title, author } = req.body;

  // Basic validation
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }

  const newBook = {
    id: nextId++,
    title: title,
    author: author
  };
  books.push(newBook);
  // Respond with the newly created book and a 201 (Created) status.
  res.status(201).json(newBook);
});

// PUT - Update a book by ID
// Updates a book's information.
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;

  const book = books.find(b => b.id === parseInt(id));
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  // Update fields if they are provided in the request.
  if (title !== undefined) {
    book.title = title;
  }
  if (author !== undefined) {
    book.author = author;
  }

  res.json(book);
});

// DELETE a book by ID
// Removes a book from the collection.
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const bookIndex = books.findIndex(b => b.id === parseInt(id));

  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  // Remove the book from the array.
  books.splice(bookIndex, 1);
  
  // Respond with a 204 (No Content) status to indicate success.
  res.status(204).send();
});

module.exports = router;
