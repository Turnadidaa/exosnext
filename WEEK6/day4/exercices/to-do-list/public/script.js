document.addEventListener('DOMContentLoaded', () => {
    const tasksList = document.getElementById('tasks-list');
    const newTaskTitleInput = document.getElementById('new-task-title');
    const addTaskButton = document.getElementById('add-task-button');

    const API_BASE_URL = 'http://localhost:3003/tasks';

    // Function to fetch and display tasks
    async function fetchTasks() {
        try {
            const response = await fetch(API_BASE_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const tasks = await response.json();
            renderTasks(tasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
            tasksList.innerHTML = '<li>Error loading tasks. Please try again.</li>';
        }
    }

    // Function to render tasks in the UL
    function renderTasks(tasks) {
        tasksList.innerHTML = '';
        if (tasks.length === 0) {
            tasksList.innerHTML = '<li class="no-tasks-message">No tasks yet! Write one above.</li>';
            return;
        }
        tasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.dataset.id = task.id;
            listItem.innerHTML = `
                <input type="checkbox" ${task.status === 'completed' ? 'checked' : ''} data-task-id="${task.id}">
                <span>${task.title}</span>
                <button class="delete-task" data-task-id="${task.id}">X</button>
            `;
            tasksList.appendChild(listItem);
        });
    }

    // Function to add a new task
    async function addTask() {
        const title = newTaskTitleInput.value.trim();
        if (!title) return;

        try {
            const response = await fetch(API_BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }

            newTaskTitleInput.value = ''; // Clear input
            fetchTasks(); // Refresh tasks
        } catch (error) {
            console.error('Error adding task:', error);
            alert(`Failed to add task: ${error.message}`);
        }
    }

    // Function to update task status
    async function updateTaskStatus(id, status) {
        try {
            const response = await fetch(`${API_BASE_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }
            fetchTasks(); // Refresh tasks
        } catch (error) {
            console.error('Error updating task status:', error);
            alert(`Failed to update task: ${error.message}`);
        }
    }

    // Function to delete a task
    async function deleteTask(id) {
        try {
            const response = await fetch(`${API_BASE_URL}/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }
            fetchTasks(); // Refresh tasks
        } catch (error) {
            console.error('Error deleting task:', error);
            alert(`Failed to delete task: ${error.message}`);
        }
    }

    // Event Listeners
    addTaskButton.addEventListener('click', addTask);
    newTaskTitleInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    tasksList.addEventListener('change', (e) => {
        if (e.target.matches('input[type="checkbox"]')) {
            const taskId = e.target.dataset.taskId;
            const newStatus = e.target.checked ? 'completed' : 'pending';
            updateTaskStatus(taskId, newStatus);
        }
    });

    tasksList.addEventListener('click', (e) => {
        if (e.target.matches('.delete-task')) {
            const taskId = e.target.dataset.taskId;
            if (confirm('Are you sure you want to delete this task?')) {
                deleteTask(taskId);
            }
        }
    });

    // Initial fetch of tasks
    fetchTasks();

    // Water Intake functionality
    const waterCups = document.querySelectorAll('.water-cup');

    waterCups.forEach(cup => {
        cup.addEventListener('click', () => {
            const isFilled = cup.dataset.filled === 'true';
            cup.dataset.filled = !isFilled; // Toggle the filled state
        });
    });
}); 