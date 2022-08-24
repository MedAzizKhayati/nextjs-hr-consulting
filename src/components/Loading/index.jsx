import { Box, Center } from '@chakra-ui/react';

const { useRouter } = require('next/router');
const { useState, useEffect } = require('react');
import { Spinner } from '@chakra-ui/react';

export default function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    loading && (
      <>
        <Box
          className="loading-bar"
          top={0}
          left={0}
          pos="fixed"
          h="5px"
          bg="green.400"
        />
        <Center
          pos="fixed"
          top={0}
          left={0}
          h="100vh"
          w="100vw"
          bg="blackAlpha.400"
          zIndex={5}
        >
          <Spinner thickness="5px" size="xl" color="green.400" />
        </Center>
      </>
    )
  );
}
