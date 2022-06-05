import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from 'src/lib/theme';
import Layout from '~components/layout';
import HomeTabMenuProvider from '~context/HomeTabMenu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Soul Divina</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomeTabMenuProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </HomeTabMenuProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
