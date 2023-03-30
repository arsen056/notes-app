import React from 'react';
import { Task } from 'common/components/task';
import { TasksWrapper } from 'features/tasks/styles';

export const Tasks = () => {
  return (
    <TasksWrapper>
      <Task/>
      <Task/>
      <Task/>
    </TasksWrapper>
  );
};
