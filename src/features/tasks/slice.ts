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
    },
    pushTask: (state, action: PayloadAction<{ id: string, task: TaskType }>) => {
      state.tasks[action.payload.id].unshift(action.payload.task);
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

export const createTask = createAsyncThunk('fetch/tasks',
  async (data: {id: string, title: string} , { dispatch }) => {
    try {
      const res = await TasksAPI.addTask(data);
      dispatch(pushTask({ id: data.id, task: res.data.data.item }));
    } catch (e) {

    } finally {

    }
  }
);

export const tasksReducer = slice.reducer;
export const { setTasks, setCurrentID, pushTask } = slice.actions;