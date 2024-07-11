import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './TasksSlice';

const preloadedState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || []
};

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState,
});

// Subscribe to store changes to update localStorage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('tasks', JSON.stringify(state.tasks));
});

export default store;
