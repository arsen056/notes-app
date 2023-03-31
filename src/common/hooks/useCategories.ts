import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { selectCategories } from 'features/categories/selectors';
import { useEffect } from 'react';
import { createCategory, fetchCategories } from 'features/categories/slice';
import { setCurrentID } from 'features/tasks/slice';

export const useCategories = () => {
  const dispatch = useAppDispatch();
  const categories = useSelector(selectCategories);

  const selectCategory = (id: string) => dispatch(setCurrentID(id));

  const addCategory = (title: string) => dispatch(createCategory(title));

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return { categories, selectCategory, addCategory };
};