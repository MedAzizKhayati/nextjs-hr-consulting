import { Box, Button, Center, Flex, Heading } from '@chakra-ui/react';
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
        bg="white"
        borderRadius="2xl"
        alignItems="center"
        justifyContent="center"
      >
        <Zoom>
          <Flex
            flexDir={{ xl: 'row', base: 'column' }}
            alignItems="center"
            justifyContent="center"
            gap={10}
          >
            <Heading
              color="blue.900"
              fontSize={['2xl', '2xl', '2xl', '4xl']}
              textAlign="center"
            >
              Nos experts sont à votre écoute!
            </Heading>
            <NextLink href="/contact">
              <Button
                borderRadius="full"
                size="lg"
                fontSize={['md', 'xl', 'xl', '2xl']}
                fontWeight="normal"
                p={['15', '19', '25', '35']}
                color="white"
                colorScheme="green"
              >
                Contact
              </Button>
            </NextLink>
          </Flex>
        </Zoom>
      </Flex>
    </Flex>
  );
}
