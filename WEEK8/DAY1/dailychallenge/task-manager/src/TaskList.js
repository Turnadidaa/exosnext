import React, { useContext, useRef, useState } from 'react';
import { TaskContext } from './TaskContext';

const TaskList = () => {
  const { state, dispatch } = useContext(TaskContext);
  const [editingId, setEditingId] = useState(null);
  const editInputRef = useRef();

  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === 'completed') return task.completed;
    if (state.filter === 'active') return !task.completed;
    return true;
  });

  const handleEdit = (task) => {
    setEditingId(task.id);
    setTimeout(() => {
      if (editInputRef.current) editInputRef.current.value = task.text;
    }, 0);
  };

  const handleSave = (id) => {
    const newText = editInputRef.current.value.trim();
    if (newText) {
      dispatch({ type: 'EDIT_TASK', payload: { id, text: newText } });
      setEditingId(null);
    }
  };

  return (
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      {filteredTasks.map(task => (
        <li key={task.id} style={{ marginBottom: '0.5rem' }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
          />
          {editingId === task.id ? (
            <>
              <input ref={editInputRef} />
              <button onClick={() => handleSave(task.id)}>💾</button>
            </>
          ) : (
            <>
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  marginLeft: '0.5rem'
                }}
              >
                {task.text}
              </span>
              <button onClick={() => handleEdit(task)} style={{ marginLeft: '1rem' }}>✏️</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
