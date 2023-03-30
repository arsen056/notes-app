export type ResponseTasksType = {
  items: TaskType[],
  totalCount: number,
  error?: string
}

export type TaskType = {
  id: string;
  title: string;
  description?: string;
  todoListId: string;
  order: number;
  status: number;
  priority: number;
  startDate?: string;
  deadline?: string;
  addedDate: string;
}

export type TasksStateType = Record<string, TaskType>