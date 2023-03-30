import React from 'react';
import { CategoriesElement, List, ListItem } from 'features/categories/styles';

export const Categories = () => {
  return (
    <CategoriesElement>
      <List>
        <ListItem>Drinks</ListItem>
        <ListItem>Languages</ListItem>
      </List>
    </CategoriesElement>
  );
};
