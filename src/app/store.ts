import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { appReducer } from 'app/slice';
import { categoryReducer } from 'features/categories/slice';
import { tasksReducer } from 'features/tasks/slice';

const rootReducer = combineReducers({
  app: appReducer, categories: categoryReducer, tasks: tasksReducer
});

export type RootStateType = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
});