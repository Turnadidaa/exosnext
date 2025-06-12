const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route d'enregistrement
router.post('/register', userController.register);
router.post('/login', userController.login);

// D'autres routes seront ajoutées plus tard : /login, /users, etc.

module.exports = router;
