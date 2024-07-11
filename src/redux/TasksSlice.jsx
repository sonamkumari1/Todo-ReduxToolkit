import { createSlice } from '@reduxjs/toolkit';

// Retrieve tasks from localStorage if available
const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

let nextTaskId = initialState.length > 0 ? Math.max(...initialState.map(task => task.id)) + 1 : 0;

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({ id: nextTaskId++, text: action.payload, completed: false });
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      const newState = state.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(newState));
      return newState;
    },
    editTask: (state, action) => {
      const { id, newText } = action.payload;
      const newState = state.map(task => task.id === id ? { ...task, text: newText } : task);
      localStorage.setItem('tasks', JSON.stringify(newState));
      return newState;
    },
    toggleCompleted: (state, action) => {
      const { id } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(state));
      }
    },
  },
});

export const { addTask, deleteTask, editTask, toggleCompleted } = tasksSlice.actions;

export default tasksSlice.reducer;
