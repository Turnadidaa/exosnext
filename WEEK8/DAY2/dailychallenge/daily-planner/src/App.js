import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, editTask, deleteTask } from './redux/actions';

import DatePicker from './components/DatePicker';
import TaskList from './components/TaskList';

function App() {
  const dispatch = useDispatch();

  // Date sélectionnée (format: "YYYY-MM-DD")
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  });

  // Champ de texte pour nouvelle tâche
  const [taskText, setTaskText] = useState('');

  // État pour édition
  const [editingTask, setEditingTask] = useState(null);

  // Accès aux tâches du jour
  const tasks = useSelector((state) => state.tasksByDate[selectedDate] || []);

  const handleAddOrEditTask = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    if (editingTask) {
      dispatch(editTask(selectedDate, editingTask.id, taskText));
      setEditingTask(null);
    } else {
      dispatch(addTask(selectedDate, taskText));
    }

    setTaskText('');
  };

  const handleEditClick = (task) => {
    setTaskText(task.text);
    setEditingTask(task);
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(selectedDate, id));
    if (editingTask && editingTask.id === id) {
      setEditingTask(null);
      setTaskText('');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🗓️ Daily Planner</h1>

      <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />

      <form onSubmit={handleAddOrEditTask} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Ajouter une tâche"
        />
        <button type="submit">
          {editingTask ? 'Modifier' : 'Ajouter'}
        </button>
        {editingTask && (
          <button type="button" onClick={() => {
            setEditingTask(null);
            setTaskText('');
          }}>
            Annuler
          </button>
        )}
      </form>

      <TaskList
        tasks={tasks}
        onEdit={handleEditClick}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
