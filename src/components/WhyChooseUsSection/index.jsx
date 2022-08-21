import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import Fade from 'react-reveal/Fade';

export default function WhyChooseUsSection() {
  return (
    <Flex
      px={10}
      pos="relative"
      flexDir={{ base: 'column', md: 'column', lg: 'row', xl: 'row' }}
    >
      <Fade left>
        <Box maxW="415px">
          <Heading color="blue.900" mb={30} fontWeight="medium">
            POURQUOI NOUS CHOISIR ?
          </Heading>
          <Text fontSize="2xl" mb={25} color="blue.900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eget nisl velit.
          </Text>
          <NextLink href="/contact">
            <Button
              fontWeight="light"
              colorScheme="green"
              p={25}
              borderRadius="sm"
            >
              CONTACTER
            </Button>
          </NextLink>
        </Box>
      </Fade>
      <Image
        src="/full-circle.png"
        pos="absolute"
        right={-175}
        top={-100}
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
    </Flex>
  );
}
