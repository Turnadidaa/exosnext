# User Management API

A simple user management system with registration and login functionality, built using Express.js, Bcrypt, and JSON file storage.

## Features

- User registration with name, last name, email, username, and password
- User login with username and password
- Password hashing using bcrypt
- JSON file-based storage
- RESTful API endpoints for user management
- Simple and responsive frontend interface

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd user-management-api
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

1. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server will start on port 3000 by default. You can access the application at `http://localhost:3000`.

## API Endpoints

### Authentication

- `POST /register` - Register a new user
  - Required fields: name, lastName, email, username, password
  - Returns: Success message or error

- `POST /login` - Login user
  - Required fields: username, password
  - Returns: Success message or error

### User Management

- `GET /users` - Get all users (without sensitive information)
- `GET /users/:id` - Get a specific user by ID
- `PUT /users/:id` - Update user information
  - Optional fields: name, lastName, email

## Frontend

The application includes two HTML pages:
- `public/login.html` - Login form
- `public/register.html` - Registration form

Both forms include:
- Input validation
- Disabled submit button when inputs are empty
- Success/error message display
- Responsive design

## Security Features

- Password hashing using bcrypt
- Input validation
- No sensitive information exposure in API responses
- CORS enabled
- Basic error handling

## Testing

You can test the API using tools like Postman or curl. Example curl commands:

```bash
# Register a new user
curl -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","lastName":"Doe","email":"john@example.com","username":"johndoe","password":"password123"}'

# Login
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"username":"johndoe","password":"password123"}'

# Get all users
curl http://localhost:3000/users

# Get specific user
curl http://localhost:3000/users/1

# Update user
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"John","lastName":"Smith","email":"john.smith@example.com"}'
``` 