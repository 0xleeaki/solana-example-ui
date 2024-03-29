import React from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../components/GlobalStyle';
import { AppState } from '../../state';
import dark from './dark';

export const Theme: React.FC = ({ children }) => {
  const theme = useSelector((t: AppState) => t.application.theme);

  const themeValue = useMemo(() => {
    console.log('theme', theme)
    if (theme === 'light') {
      return dark;
    }
    return dark;
  }, [theme]);

  return (
    <ThemeProvider theme={themeValue}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
