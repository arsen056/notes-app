import React from 'react';
import { CategoriesElement, List, ListItem } from 'features/categories/styles';
import { useCategories } from 'common/hooks/useCategories';
import { AddItem } from 'common/components/addItem';

export const Categories = () => {
  const { categories, addCategory, selectCategory } = useCategories();

  return (
    <CategoriesElement>
      <AddItem addItem={addCategory}/>
      <List>
        {categories.map(c => <ListItem key={c.id} onClick={() => selectCategory(c.id)}>{c.title}</ListItem>)}
      </List>
    </CategoriesElement>
  );
};
