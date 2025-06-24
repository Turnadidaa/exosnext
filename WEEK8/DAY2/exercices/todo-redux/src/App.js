import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './redux/actions';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const todos = useSelector((state) => state.todos); // accès à l'état global
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>📝 Ma Todo List</h1>
      <AddTodo addTodo={(text) => dispatch(addTodo(text))} />
      <TodoList
        todos={todos}
        toggleTodo={(id) => dispatch(toggleTodo(id))}
        removeTodo={(id) => dispatch(removeTodo(id))}
      />
    </div>
  );
}

export default App;
