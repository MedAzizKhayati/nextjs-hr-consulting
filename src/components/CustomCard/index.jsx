import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Img as Image
} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import Zoom from 'react-reveal/Zoom';

export default function BlogPostWithImage({
  title,
  description,
  image,
  imageAlt,
  delay = 0
}) {
  const zoomRef = useRef(null);
  useEffect(() => {
    zoomRef.current.querySelector('div').style.height = '100%';
  }, []);
  return (
    <Center py={6} ref={zoomRef}>
      <Zoom delay={delay}>
        <Box
          maxW="400px"
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
            maxH="250"
            objectFit="cover"
            overflow="hidden"
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}
          >
            <Image
              fit="cover"
              src={
                image ||
                'https://picsum.photos/400/' +
                  Math.floor(Math.random() * 30 + 250)
              }
              alt={imageAlt || 'Image Formation'}
            />
          </Box>
          <Stack>
            <Heading color="blue.900" fontSize={'xl'} fontFamily={'body'} textAlign="center">
              {title}
            </Heading>
            <Text noOfLines={5} color={'gray.500'}>
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
