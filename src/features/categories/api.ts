import { instance } from 'common/constants/instance';

import { CategoryType, UpdateCategory } from 'features/categories/types';

export const categoriesAPI = {
  getCategories() {
    return instance.get<CategoryType[]>('todo-lists');
  },

  updateCategory(id: string, todoList: UpdateCategory) {
    return instance.put(`todo-lists/${id}`, todoList);
  },

  deleteCategory(id: string) {
    return instance.put(`todo-lists/${id}`);
  }
};