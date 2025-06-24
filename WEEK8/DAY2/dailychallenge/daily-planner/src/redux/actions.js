export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (date, text) => ({
  type: ADD_TASK,
  payload: { date, text }
});

export const editTask = (date, id, text) => ({
  type: EDIT_TASK,
  payload: { date, id, text }
});

export const deleteTask = (date, id) => ({
  type: DELETE_TASK,
  payload: { date, id }
});
