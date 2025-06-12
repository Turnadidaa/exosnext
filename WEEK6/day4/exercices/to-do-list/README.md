# Task Management API

A simple RESTful API for managing tasks using Express.js and JSON file storage.

## Features

- Create, read, update, and delete tasks
- JSON file-based storage
- Input validation
- Error handling

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will start on port 3000 by default.

## API Endpoints

### GET /tasks
Retrieve all tasks

### GET /tasks/:id
Retrieve a specific task by ID

### POST /tasks
Create a new task
```json
{
  "title": "Task title",
  "description": "Task description",
  "status": "pending"
}
```

### PUT /tasks/:id
Update a task
```json
{
  "title": "Updated title",
  "description": "Updated description",
  "status": "completed"
}
```

### DELETE /tasks/:id
Delete a task

## Error Handling

The API includes proper error handling for:
- Invalid input data
- Non-existent tasks
- File system operations
- Server errors

## Data Structure

Tasks are stored with the following structure:
```json
{
  "id": 1,
  "title": "Task title",
  "description": "Task description",
  "status": "pending",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
``` 