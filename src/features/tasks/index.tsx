import React from 'react';
import { Task } from 'common/components/task';
import { useTasks } from 'common/hooks/useTasks';

import { TasksWrapper } from './styles';

export const Tasks = () => {
  const tasks = useTasks();

  return (
    <TasksWrapper>
      {tasks?.map(t => <Task key={t.id} title={t.title} status={t.status} />)}
    </TasksWrapper>
  );
};
