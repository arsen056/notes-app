import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { appReducer } from 'app/slice';
import { categoryReducer } from 'features/categories/slice';

const rootReducer = combineReducers({
  app: appReducer, categories: categoryReducer
});

export type RootStateType = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
});