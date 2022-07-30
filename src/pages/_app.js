import { ChakraProvider } from '@chakra-ui/react';
import Head from '@components/Head';
import Navbar from '@components/Navbar';
import DefaultTheme from '@styles/theme';

import '@styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={DefaultTheme}>
      <Head />
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
