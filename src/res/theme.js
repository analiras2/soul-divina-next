import { createTheme } from '@mui/material/styles';
import NunitoSans from './fonts/NunitoSans-Regular.ttf';
import NunitoSansSemiBold from './fonts/NunitoSans-SemiBold.ttf';
import NunitoSansBold from './fonts/NunitoSans-Bold.ttf';

export default createTheme({
  palette: {
    primary: {
      main: '#873DBA',
    },
    secondary: {
      main: '#AA3DBA',
    },
    inherit: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: 'NunitoSans, Arial',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'NunitoSans';
          font-style: normal;
          font-display: swap;
          font-weight: 'regular';
          src: local('NunitoSans-Regular'), url(${NunitoSans}) format('truetype');
        }
        @font-face {
          font-family: 'NunitoSans';
          font-style: normal;
          font-display: swap;
          font-weight: 'medium';
          src: local('NunitoSans-SemiBold'), url(${NunitoSansSemiBold}) format('truetype');
        }
        @font-face {
          font-family: 'NunitoSans';
          font-style: normal;
          font-display: swap;
          font-weight: 'bold';
          src: local('NunitoSans-Bold'), url(${NunitoSansBold}) format('truetype');
        }
      `,
    },
  },
});
