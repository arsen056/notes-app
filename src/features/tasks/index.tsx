import React from 'react';
import { Task } from 'common/components/task';
import { useTasks } from 'common/hooks/useTasks';
import { AddItem } from 'common/components/addItem';

import { TasksWrapper } from './styles';

export const Tasks = () => {
  const { tasks, addTask } = useTasks();

  return (
    <TasksWrapper>
      <AddItem addItem={addTask} />

      {tasks?.map(t => <Task key={t.id} title={t.title} status={t.status} />)}
    </TasksWrapper>
  );
};
