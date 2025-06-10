// Step 3 & 5: Create Your Express Application and Mount the Router

// Import the express library
const express = require('express');
// Import the router module for books from the routes directory
const booksRouter = require('./routes/books');

// Initialize an express application
const app = express();
// Define the port number the server will listen on
const port = process.env.PORT || 3009;

// Middleware to parse incoming JSON requests, which is necessary for
// creating and updating books.
app.use(express.json());

// Mount the booksRouter for any requests to the '/books' path.
// All routes defined in books.js will be prefixed with '/books'.
app.use('/books', booksRouter);

// Start the server and have it listen on the specified port.
app.listen(port, () => {
  console.log(`Book management API is running on http://localhost:${port}`);
});
