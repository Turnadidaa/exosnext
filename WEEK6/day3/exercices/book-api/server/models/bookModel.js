const pool = require("../config/db");

// Obtenir tous les livres
const getAllBooks = async () => {
  const result = await pool.query("SELECT * FROM books ORDER BY id");
  return result.rows;
};

// Obtenir un seul livre par ID
const getBookById = async (id) => {
  const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
  return result.rows[0];
};

// Créer un nouveau livre
const createBook = async (title, author, published_year) => {
  const result = await pool.query(
    "INSERT INTO books (title, author, published_year) VALUES ($1, $2, $3) RETURNING *",
    [title, author, published_year]
  );
  return result.rows[0];
};

// Modifier un livre
const updateBook = async (id, title, author, published_year) => {
  const result = await pool.query(
    "UPDATE books SET title = $1, author = $2, published_year = $3 WHERE id = $4 RETURNING *",
    [title, author, published_year, id]
  );
  return result.rows[0];
};

// Supprimer un livre
const deleteBook = async (id) => {
  await pool.query("DELETE FROM books WHERE id = $1", [id]);
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
