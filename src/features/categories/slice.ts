import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryType } from 'features/categories/types';
import { fetchTasks, setCurrentID } from 'features/tasks/slice';

import { categoriesAPI } from './api';

const initialState: CategoryType[] = [];

const slice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (_, action: PayloadAction<CategoryType[]>) => {
      return action.payload;
    },
    pushCategory: (state, action: PayloadAction<CategoryType>) => {
      state.unshift(action.payload);
    }
  }
});

export const fetchCategories = createAsyncThunk('fetch/categories',
  async (_, { dispatch }) => {
    try {
      const res = await categoriesAPI.getCategories();
      dispatch(setCategories(res.data));
      res.data.forEach(c => dispatch(fetchTasks(c.id)));
      dispatch(setCurrentID(res.data[0].id));
    } catch (e) {

    } finally {

    }
  }
);

export const createCategory = createAsyncThunk('add/categories',
  async (title: string, { dispatch }) => {
    try {
      const res = await categoriesAPI.addCategory(title);
      dispatch(pushCategory(res.data.data.item));
    } catch (e) {

    } finally {

    }
  }
);

export const { setCategories, pushCategory } = slice.actions;
export const categoryReducer = slice.reducer;
