import React from 'react';
import { Task } from 'common/components/task';

import { TasksWrapper } from './styles';

export const Tasks = () => {
  return (
    <TasksWrapper>
      <Task/>
      <Task/>
      <Task/>
    </TasksWrapper>
  );
};
