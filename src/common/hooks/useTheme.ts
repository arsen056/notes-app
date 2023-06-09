import { useEffect, useState } from 'react';

export const useTheme = () => {

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return toggle;
};