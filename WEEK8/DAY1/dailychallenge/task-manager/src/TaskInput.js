import React, { useContext, useRef } from 'react';
import { TaskContext } from './TaskContext';

const TaskInput = () => {
  const inputRef = useRef();
  const { dispatch } = useContext(TaskContext);

  const handleAdd = () => {
    const value = inputRef.current.value.trim();
    if (value) {
      dispatch({ type: 'ADD_TASK', payload: value });
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Nouvelle tâche..." />
      <button onClick={handleAdd}>Ajouter</button>
    </div>
  );
};

export default TaskInput;
