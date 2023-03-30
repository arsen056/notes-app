import { TasksStateType } from 'features/tasks/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {} as TasksStateType;

const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<TasksStateType>) => {
      return action.payload;
    }
  }
});

export const tasksReducer = slice.reducer;