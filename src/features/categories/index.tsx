import React from 'react';
import { CategoriesElement, List, ListItem } from 'features/categories/styles';
import { useCategories } from 'common/hooks/useCategories';
import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { setCurrentID } from 'features/tasks/slice';
import { AddItem } from 'common/components/addItem';
import { createCategory } from 'features/categories/slice';

export const Categories = () => {
  const dispatch = useAppDispatch();
  const categories = useCategories();

  const selectCategory = (id: string) => dispatch(setCurrentID(id));

  const addCategory = (title: string) => {
    dispatch(createCategory(title));
  };

  return (
    <CategoriesElement>
      <AddItem addItem={addCategory}/>
      <List>
        {categories.map(c => <ListItem key={c.id} onClick={() => selectCategory(c.id)}>{c.title}</ListItem>)}
      </List>
    </CategoriesElement>
  );
};
