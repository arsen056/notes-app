import { TasksStateType, TaskType } from 'features/tasks/types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { pushCategory, setCategories } from 'features/categories/slice';
import { TasksAPI } from 'features/tasks/api';

const initialState = { currentId: '', tasks: {} } as TasksStateType;

const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<{ id: string, items: TaskType[] }>) => {
      state.tasks[action.payload.id] = action.payload.items;
    },
    setCurrentID: (state, action: PayloadAction<string>) => {
      state.currentId = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(setCategories, (state, action) => {
      action.payload.forEach((tl) => state.tasks[tl.id] = []);
    });
    builder.addCase(pushCategory, (state, action) => {
      state.tasks[action.payload.id] = [];
    });
  }
});

export const fetchTasks = createAsyncThunk('fetch/tasks',
  async (id: string, { dispatch }) => {
    try {
      const res = await TasksAPI.getTasks(id);
      dispatch(setTasks({ id, items: res.data.items }));
    } catch (e) {

    } finally {

    }
  }
);

export const tasksReducer = slice.reducer;
export const { setTasks, setCurrentID } = slice.actions;