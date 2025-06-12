const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3009;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// File path for users data
const USERS_FILE = path.join(__dirname, 'users.json');

// Initialize users file if it doesn't exist
async function initializeUsersFile() {
    try {
        await fs.access(USERS_FILE);
    } catch {
        await fs.writeFile(USERS_FILE, '[]');
    }
}

// Read users from file
async function readUsers() {
    const data = await fs.readFile(USERS_FILE, 'utf8');
    return JSON.parse(data);
}

// Write users to file
async function writeUsers(users) {
    await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
}

// Routes
app.post('/register', async (req, res) => {
    try {
        const { name, lastName, email, username, password } = req.body;

        // Validate required fields
        if (!name || !lastName || !email || !username || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const users = await readUsers();

        // Check if username or email already exists
        if (users.some(user => user.username === username)) {
            return res.status(400).json({ error: 'Username already exists' });
        }
        if (users.some(user => user.email === email)) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = {
            id: users.length + 1,
            name,
            lastName,
            email,
            username,
            password: hashedPassword
        };

        users.push(newUser);
        await writeUsers(users);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate required fields
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        const users = await readUsers();
        const user = users.find(u => u.username === username);

        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        res.json({ message: 'Login successful' });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await readUsers();
        // Remove sensitive information
        const safeUsers = users.map(({ password, ...user }) => user);
        res.json(safeUsers);
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const users = await readUsers();
        const user = users.find(u => u.id === parseInt(req.params.id));

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Remove sensitive information
        const { password, ...safeUser } = user;
        res.json(safeUser);
    } catch (error) {
        console.error('Get user error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.put('/users/:id', async (req, res) => {
    try {
        const { name, lastName, email } = req.body;
        const users = await readUsers();
        const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

        if (userIndex === -1) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update user information
        users[userIndex] = {
            ...users[userIndex],
            name: name || users[userIndex].name,
            lastName: lastName || users[userIndex].lastName,
            email: email || users[userIndex].email
        };

        await writeUsers(users);

        // Remove sensitive information
        const { password, ...safeUser } = users[userIndex];
        res.json(safeUser);
    } catch (error) {
        console.error('Update user error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Initialize the users file and start the server
initializeUsersFile().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}); 