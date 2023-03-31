import React, { FC } from 'react';

import { TaskElement } from './style';

type Props = {
  title: string,
  status: number
}

export const Task:FC<Props> = ({ title , status }) => {
  return (
    <TaskElement>
      <span>{title}</span>
      <input type="checkbox" checked={!!status} onChange={() => {}} />
    </TaskElement>
  );
};
