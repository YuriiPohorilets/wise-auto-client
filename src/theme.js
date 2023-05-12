import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#525E75',
      accent: '#92BA92',
      darker: '#78938A',
    },
    secondary: {
      main: '#92BA92',
    },
    neutral: {
      main: '#F1DDBF',
      light: '#ffffff',
      accent: 'rgba(146, 186, 146, 0.1)',
      err: '#FF6161',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
});
