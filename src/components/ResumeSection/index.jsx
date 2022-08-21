import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import Zoom from 'react-reveal/Zoom';
import NextLink from 'next/link';

export default function ResumeSection() {
  return (
    <Flex justifyContent="center" pos="relative">
      <Box
        pos="absolute"
        bottom={0}
        bg="#052345"
        h="50%"
        w="100%"
        zIndex={-1}
      />
      <Flex
        p={55}
        w="80%"
        flexDir={{ xl: 'row', base: 'column' }}
        bg="white"
        borderRadius="2xl"
        alignItems="center"
        justifyContent="center"
      >
        <Zoom>
          <Heading
            color="blue.900"
            fontSize={['2xl', '2xl', '2xl', '4xl']}
            pr={{ lg: 20 }}
            pb={25}
            textAlign={{ md: 'center', base: 'center' }}
          >
            Pour Plus De Renseignement veuillez Déposer votre CV ici
          </Heading>
          <NextLink href="/send-resume">
            <Button
              borderRadius="full"
              size="lg"
              fontSize={['md', 'xl', 'xl', '2xl']}
              fontWeight="normal"
              p={['15', '19', '25', '35']}
              color="white"
              colorScheme="green"
            >
              Deposer un CV
            </Button>
          </NextLink>
        </Zoom>
      </Flex>
    </Flex>
  );
}
