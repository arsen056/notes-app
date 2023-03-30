import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoriesStateType } from 'features/categories/types';

import { categoriesAPI } from './api';

const initialState: CategoriesStateType = [];

const slice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoriesStateType>) => {
      return action.payload;
    }
  }
});

export const fetchCategories = createAsyncThunk('fetchCategories',
  async (_, { dispatch }) => {
    try {
      const res = await categoriesAPI.getCategories();
      dispatch(setCategories(res.data));
    } catch (e) {

    } finally {

    }
  }
);

export const { setCategories } = slice.actions;
export const categoryReducer = slice.reducer;
