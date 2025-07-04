import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onRemove={removeTodo}
        />
      ))}
    </ul>
  );
}
