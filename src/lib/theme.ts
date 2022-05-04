import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#873DBA',
    },
    secondary: {
      main: '#AA3DBA',
    },
    error: {
      main: red.A400,
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