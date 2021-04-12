import { ChakraProvider } from '@chakra-ui/react';

import theme from '../styles/theme';
import { AppProps } from 'next/app';
import { MobileFooter } from '../components/Footer/MobileFooter';
import { DesktopFooter } from '../components/Footer/DesktopFooter';
import { Header } from '../components/Header/Header';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  return (
    <ChakraProvider resetCSS theme={theme}>
      
      <Header />
      <DesktopFooter />
      <Component {...pageProps} />
      
      <MobileFooter/>
    </ChakraProvider>
  );
}

export default MyApp;
