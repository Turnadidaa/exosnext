import { ADD_TASK, EDIT_TASK, DELETE_TASK } from './actions';

const initialState = {
  tasksByDate: {} // clé = date ("YYYY-MM-DD"), valeur = tableau de tâches
};

export default function taskReducer(state = initialState, action) {
  const { date, id, text } = action.payload || {};

  switch (action.type) {
    case ADD_TASK: {
      const currentTasks = state.tasksByDate[date] || [];
      const newTask = {
        id: Date.now(),
        text,
        completed: false
      };
      return {
        ...state,
        tasksByDate: {
          ...state.tasksByDate,
          [date]: [...currentTasks, newTask]
        }
      };
    }

    case EDIT_TASK: {
      const updatedTasks = state.tasksByDate[date].map(task =>
        task.id === id ? { ...task, text } : task
      );
      return {
        ...state,
        tasksByDate: {
          ...state.tasksByDate,
          [date]: updatedTasks
        }
      };
    }

    case DELETE_TASK: {
      const filteredTasks = state.tasksByDate[date].filter(task => task.id !== id);
      return {
        ...state,
        tasksByDate: {
          ...state.tasksByDate,
          [date]: filteredTasks
        }
      };
    }

    default:
      return state;
  }
}
