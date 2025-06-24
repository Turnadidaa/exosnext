import React from 'react';

export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>🗑</button>
    </li>
  );
}
