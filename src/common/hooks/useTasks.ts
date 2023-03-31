import { useSelector } from 'react-redux';
import { selectCurrentID, selectTasks } from 'features/tasks/selectors';
import { createTask } from 'features/tasks/slice';
import { useAppDispatch } from 'common/hooks/useAppDispatch';

export const useTasks = () => {
  const dispatch = useAppDispatch();
  const currentID = useSelector(selectCurrentID);
  const id = useSelector(selectCurrentID);
  const tasks = useSelector(selectTasks(currentID));

  const addTask = (title: string) => {
    dispatch(createTask({ id, title }));
  };

  return { tasks, addTask };
};