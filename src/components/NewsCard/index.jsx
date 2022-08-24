import { Box, Center, Text, Stack, Image } from '@chakra-ui/react';
import CustomHeading from '@components/CustomHeading';
import { useEffect, useRef } from 'react';
import Zoom from 'react-reveal/Zoom';

export default function NewsCard({ news, delay, ...otherProps }) {
  const zoomRef = useRef(null);
  useEffect(() => {
    zoomRef.current.querySelector('div').style.height = '100%';
  }, []);

  return (
    <Center py={6} ref={zoomRef}>
      <Zoom delay={delay}>
        <Box
          pb={6}
          h="100%"
          maxW="400px"
          w="full"
          bg="white"
          boxShadow="2xl"
          rounded="md"
          p={6}
          overflow={'hidden'}
          {...otherProps}
        >
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}
          >
            <Image
              width={400}
              height={220}
              objectFit="cover"
              src={news.image || 'https://picsum.photos/1920/1081'}
              alt={news.imageAlt || 'news'}
            />
          </Box>
          <Stack>
            <CustomHeading
              fontSize="lg"
              color="green.400"
              lineHeight="1.5"
              title={news.title}
              w="unset"
            />
            <Text color={'blue.600'} fontWeight="medium">
              {new Date(news.date).toLocaleDateString()}
            </Text>
            <Text noOfLines={5} color={'teal.400'}>
              {news.description}
            </Text>
          </Stack>
        </Box>
      </Zoom>
    </Center>
  );
}
