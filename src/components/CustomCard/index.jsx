import { Box, Center, Heading, Text, Stack, Image } from '@chakra-ui/react';
import Zoom from 'react-reveal/Zoom';

export default function blogPostWithImage({ title }) {
  return (
    <Center py={6}>
      <Zoom>
        <Box
          maxW={'400px'}
          w="full"
          boxShadow="xl"
          bg="white"
          rounded="lg"
          p={6}
          overflow={'hidden'}
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          _hover={{
            transform: 'scale(1.07)',
            boxShadow: 'dark-lg',
            cursor: 'pointer'
          }}
        >
          <Box bg={'gray.200'} minH={250} mt={-6} mx={-6} mb={6} pos={'relative'}>
            <Image
              src={"https://picsum.photos/400/" + Math.floor(Math.random() * 30 + 250) }
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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </Text>
          </Stack>
        </Box>
      </Zoom>
    </Center>
  );
}
