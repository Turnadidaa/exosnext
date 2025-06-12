const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

const TASKS_FILE = path.join(__dirname, '../data/tasks.json');

// Helper function to read tasks from file
async function readTasks() {
  try {
    const data = await fs.readFile(TASKS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      // If file doesn't exist, create it with empty array
      await fs.writeFile(TASKS_FILE, JSON.stringify([]));
      return [];
    }
    throw error;
  }
}

// Helper function to write tasks to file
async function writeTasks(tasks) {
  await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

// GET all tasks
router.get('/', async (req, res, next) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

// GET task by ID
router.get('/:id', async (req, res, next) => {
  try {
    const tasks = await readTasks();
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    res.json(task);
  } catch (error) {
    next(error);
  }
});

// POST new task
router.post('/', async (req, res, next) => {
  try {
    const { title, description, status = 'pending' } = req.body;
    
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const tasks = await readTasks();
    const newTask = {
      id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
      title,
      description,
      status,
      createdAt: new Date().toISOString()
    };

    tasks.push(newTask);
    await writeTasks(tasks);
    
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
});

// PUT update task
router.put('/:id', async (req, res, next) => {
  try {
    const { title, description, status } = req.body;
    const tasks = await readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const updatedTask = {
      ...tasks[taskIndex],
      title,
      description: description || tasks[taskIndex].description,
      status: status || tasks[taskIndex].status,
      updatedAt: new Date().toISOString()
    };

    tasks[taskIndex] = updatedTask;
    await writeTasks(tasks);
    
    res.json(updatedTask);
  } catch (error) {
    next(error);
  }
});

// DELETE task
router.delete('/:id', async (req, res, next) => {
  try {
    const tasks = await readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    tasks.splice(taskIndex, 1);
    await writeTasks(tasks);
    
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router; 