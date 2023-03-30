import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoriesStateType } from 'features/categories/types';

const initialState: CategoriesStateType = [

];

const slice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoriesStateType>) => {
      return action.payload;
    }
  }
});

export const categoryReducer = slice.reducer;
