import { ChakraProvider } from '@chakra-ui/react';

import theme from '../styles/theme';
import { AppProps } from 'next/app';
import { Header } from '../components/Header/Header';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  return (
    <ChakraProvider resetCSS theme={theme}>
      
      <Header />
      <Component {...pageProps} />
      
    </ChakraProvider>
  );
}

export default MyApp;
