import React from 'react';

export default function TaskList({ tasks, onEdit, onDelete }) {
  if (!tasks || tasks.length === 0) {
    return <p>Aucune tâche pour ce jour.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => onEdit(task)}>✏️</button>
          <button onClick={() => onDelete(task.id)}>🗑</button>
        </li>
      ))}
    </ul>
  );
}
