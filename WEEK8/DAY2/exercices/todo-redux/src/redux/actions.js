// Action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// Action creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text
  }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id }
});
