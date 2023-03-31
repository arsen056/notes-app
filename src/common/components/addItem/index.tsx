import React, { ChangeEvent, FC, useState } from 'react';

type Props = {
  addItem: (title: string) => void
}
export const AddItem: FC<Props> = ({ addItem }) => {
  const [value, setValue] = useState<string>('');

  const addItemHandler = () => addItem(value);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={onChange}/>
      <button onClick={addItemHandler}>+</button>
    </div>
  );
};
