import { useSelector } from 'react-redux';
import { selectCurrentID, selectTasks } from 'features/tasks/selectors';

export const useTasks = () => {
  const currentID = useSelector(selectCurrentID);

  return useSelector(selectTasks(currentID));
};