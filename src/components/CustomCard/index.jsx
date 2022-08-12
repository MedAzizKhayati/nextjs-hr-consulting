import { Box, Center, Heading, Text, Stack, Image } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import Zoom from 'react-reveal/Zoom';

export default function blogPostWithImage({ title, description }) {
  const zoomRef = useRef(null);
  useEffect(() => {
    zoomRef.current.querySelector('div').style.height = '100%';
  }, []);

  return (
    <Center py={6} ref={zoomRef}>
      <Zoom>
        <Box
          w={{ base: 300, md: '400px' }}
          // w="full"
          h="100%"
          boxShadow="xl"
          bg="white"
          rounded="lg"
          p={6}
          overflow={'hidden'}
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          _hover={{
            transform: 'scale(1.03)',
            boxShadow: 'dark-lg',
            cursor: 'pointer'
          }}
        >
          <Box
            h={{ base: 150, md: 250 }}
            objectFit="cover"
            overflow="hidden"
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}
          >
            <Image
              src={
                'https://picsum.photos/400/' +
                Math.floor(Math.random() * 30 + 250)
              }
            />
          </Box>
          <Stack>
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              Offre
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} textAlign="center">
              {title}
            </Heading>
            <Text color={'gray.500'}>
              {description ||
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam\
              erat, sed diam voluptua. At vero eos et accusam et justo duo\
              dolores et ea rebum.'}
            </Text>
          </Stack>
        </Box>
      </Zoom>
    </Center>
  );
}
