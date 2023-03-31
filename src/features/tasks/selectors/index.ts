import { RootStateType } from 'app/store';
import { TaskType } from 'features/tasks/types';

export const selectTasks = (id: string) => (state: RootStateType): TaskType[] => state.tasks.tasks[id];
export const selectCurrentID = (state: RootStateType) => state.tasks.currentId;