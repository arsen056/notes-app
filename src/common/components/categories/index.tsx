import React from 'react';
import { CategoriesElement, List, ListItem } from 'common/components/categories/styles';



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
