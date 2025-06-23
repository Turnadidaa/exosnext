import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskFilters = () => {
  const { dispatch, state } = useContext(TaskContext);
  const filters = ['all', 'active', 'completed'];

  return (
    <div style={{ margin: '1rem 0' }}>
      {filters.map(f => (
        <button
          key={f}
          onClick={() => dispatch({ type: 'FILTER_TASKS', payload: f })}
          style={{ marginRight: '0.5rem', fontWeight: state.filter === f ? 'bold' : 'normal' }}
        >
          {f.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default TaskFilters;
