const bookModel = require("../models/bookModel");

// GET /api/books
const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/books/:id
const getBookById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const book = await bookModel.getBookById(id);

    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: "Livre non trouvé" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/books
const createBook = async (req, res) => {
  try {
    const { title, author, published_year } = req.body;
    const newBook = await bookModel.createBook(title, author, published_year);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/books/:id
const updateBook = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, author, published_year } = req.body;
    const updatedBook = await bookModel.updateBook(id, title, author, published_year);

    if (updatedBook) {
      res.json(updatedBook);
    } else {
      res.status(404).json({ message: "Livre non trouvé" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /api/books/:id
const deleteBook = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await bookModel.deleteBook(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
