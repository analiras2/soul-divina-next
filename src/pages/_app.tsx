import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from 'src/lib/theme';
import Layout from '~components/layout';
import HomeTabMenuProvider from '~context/HomeTabMenu';
import StoreProvider from '~context/Store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Soul Divina</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomeTabMenuProvider>
          <StoreProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </StoreProvider>
        </HomeTabMenuProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
