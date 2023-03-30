import { instance } from 'common/constants/instance';

import { ResponseTasksType } from './types';

export const TasksAPI = {
  getTasks(id: string) {
    return instance.get<ResponseTasksType>(`/todo-lists/${id}/tasks`);
  }
};