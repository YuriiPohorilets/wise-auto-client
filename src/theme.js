import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#525E75',
      accent: '#92BA92',
      active: '#78938A',
    },
    neutral: {
      main: '#F1DDBF',
      err: '#FF6161',
      accent: 'rgba(146, 186, 146, 0.1)',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
});
