import { instance } from 'common/constants/instance';

import { ResponseTasksType } from './types';

export const TasksAPI = {
  getTasks(id: string) {
    return instance.get<ResponseTasksType>(`/todo-lists/${id}/tasks`);
  },
  addTask(data: {id: string, title: string}) {
    const { id, title } = data;
    return instance.post(`/todo-lists/${id}/tasks`, { title });
  }
};