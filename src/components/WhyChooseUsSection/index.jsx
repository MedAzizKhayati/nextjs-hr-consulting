import { Box, Button, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import Fade from 'react-reveal/Fade';

export default function WhyChooseUsSection() {
  return (
    <Center
      px={10}
      pos="relative"
      flexDir="column"
    >
      <Heading
        fontSize={{ base: '5xl', md: '6xl', lg: '7xl' }}
        color="blue.900"
        textAlign="center"
        my={40}
      >
        POURQUOI NOUS CHOISIR?
      </Heading>
      <Image
        src="/full-circle.png"
        pos="absolute"
        right={-175}
        bottom={0}
        zIndex={-1}
      />
      <Fade right>
        <Image
          src="/roadmap.png"
          zIndex={-1}
          height="auto"
          width={{
            lg: '850px',
            xl: '1000px'
          }}
        />
      </Fade>
    </Center>
  );
}
