import { createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider as TProvider } from '@emotion/react';
import { dark, light } from '../themes';
import { Box } from '@mui/material';

const ThemeContext = createContext({
  themeName: 'light' | 'dark',
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const currentTheme = localStorage.getItem('THEME');
  const [themeName, setThemeName] = useState(
    currentTheme === 'dark' ? 'dark' : 'light'
  );

  const toggleTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  };

  const theme = useMemo(() => {
    localStorage.setItem('THEME', themeName);
    if (themeName === 'light') return light;
    return dark;
  }, [themeName]);

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        toggleTheme,
      }}
    >
      <TProvider theme={themeName === 'dark' ? dark : light}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </TProvider>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;

export const useThemeContext = () => useContext(ThemeContext);
