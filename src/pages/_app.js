import { ChakraProvider } from '@chakra-ui/react';
import Head from '@components/Head';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import DefaultTheme from '@styles/theme';
import config from 'react-reveal/globals';

import '@styles/global.css';

config({ ssrFadeout: true });

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={DefaultTheme}>
      <Head />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
