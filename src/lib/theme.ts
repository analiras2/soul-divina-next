import { createTheme } from '@mui/material/styles';
import Colors from '~res/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    error: {
      main: Colors.error,
    },
  },
  typography: {
    fontFamily: [
      'Nunito Sans',
      'sans-serif',
      '-apple-system',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
