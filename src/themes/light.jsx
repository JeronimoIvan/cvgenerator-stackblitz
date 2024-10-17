import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';

export let light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6366F1',
      dark: yellow[800],
      light: yellow[500],
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFF',
      paper: '#FFFFFF',
      contrastText: '#000',
      neutral: '#1C2536',
    },
    neutral: {
      50: '#F8F9FA',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D2D6DB',
      400: '#9DA4AE',
      500: '#6C737F',
      600: '#4D5761',
      700: '#2F3746',
      main: '#1C2536',
      900: '#111927',
    },
    white: '#FFF',
  },
});

light = createTheme(light, {
  typography: {
    h1: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 32,
      fontWeight: 600,
      color: light.palette.background.contrastText,
    },

    roboto: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: 16,
      fontWeight: 'regular',
      color: light.palette.background.contrastText,
    },
    poppins: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 16,
      fontWeight: 'regular',
      color: light.palette.background.contrastText,
    },
    opensans: {
      fontFamily: ['OpenSans', 'sans-serif'].join(','),
      fontSize: 16,
      fontWeight: 'regular',
      color: light.palette.background.contrastText,
    },
    inter: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 16,
      fontWeight: 'regular',
      color: light.palette.background.contrastText,
    },
  },
});
