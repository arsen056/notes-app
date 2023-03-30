import { instance } from 'common/constants/instance';

import { GetCategories } from './types/GetCategories';

export const categoriesAPI = {
  getCategories() {
    return instance.get<GetCategories>('todo-lists');
  },

  updateCategory(id: string, todoList: any) {
    return instance.put(`todo-lists/${id}`, todoList);
  },

  deleteCategory(id: string) {
    return instance.put(`todo-lists/${id}`);
  }
};