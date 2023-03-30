import { useDispatch } from 'react-redux';

import { store } from 'app/store';

type UseAppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<UseAppDispatch>();