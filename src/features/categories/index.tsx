import React from 'react';
import { CategoriesElement, List, ListItem } from 'features/categories/styles';

import { useCategories } from 'common/hooks/useCategories';

export const Categories = () => {
  const categories = useCategories();

  return (
    <CategoriesElement>
      <List>
        {categories.map(c => <ListItem key={c.id}>{c.title}</ListItem>)}
      </List>
    </CategoriesElement>
  );
};
