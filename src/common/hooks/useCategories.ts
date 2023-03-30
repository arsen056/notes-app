import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { selectCategories } from 'features/categories/selectors';
import { useEffect } from 'react';
import { fetchCategories } from 'features/categories/slice';

export const useCategories = () => {
  const dispatch = useAppDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return categories;
};