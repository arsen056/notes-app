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

export const { setCategories } = slice.actions;
export const categoryReducer = slice.reducer;
