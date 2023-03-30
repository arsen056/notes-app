import React from 'react';

import { TaskElement } from './style';

export const Task = () => {
  return (
    <TaskElement>
      <span>Task</span>
      <input type="checkbox"/>
    </TaskElement>
  );
};
