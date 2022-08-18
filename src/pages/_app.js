import { Box, ChakraProvider } from '@chakra-ui/react';
import Head from '@components/Head';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import DefaultTheme from '@styles/theme';
import config from 'react-reveal/globals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '@styles/global.css';

import { ApolloProvider } from '@apollo/client';
import { appoloClient } from '@services/appolo-config';
import Loading from '@components/Loading';

config({ ssrFadeout: true });

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={appoloClient}>
      <ChakraProvider theme={DefaultTheme}>
        <Box id="__main">
          <Head />
          <Loading />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Box>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ChakraProvider>
    </ApolloProvider>
  );
}
