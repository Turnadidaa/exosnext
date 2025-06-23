import React from 'react';
import { TaskProvider } from './TaskContext';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import TaskFilters from './TaskFilters';

function App() {
  return (
    <TaskProvider>
      <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>📝 Task Manager</h1>
        <TaskInput />
        <TaskFilters />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
