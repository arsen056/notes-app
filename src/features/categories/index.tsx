import React from 'react';
import { CategoriesElement, List, ListItem } from 'features/categories/styles';
import { useCategories } from 'common/hooks/useCategories';
import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { setCurrentID } from 'features/tasks/slice';

export const Categories = () => {
  const dispatch = useAppDispatch();
  const categories = useCategories();

  const selectCategory = (id: string) => dispatch(setCurrentID(id));

  return (
    <CategoriesElement>
      <List>
        {categories.map(c => <ListItem key={c.id} onClick={() => selectCategory(c.id)}>{c.title}</ListItem>)}
      </List>
    </CategoriesElement>
  );
};
