import { Box, Button, Flex, Heading, HStack, Image } from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';
import NextLink from 'next/link';

export default function HeroSection() {
  return (
    <Flex
      flexDir="row"
      alignItems="center"
      justifyContent={{
        lg: 'space-between',
        base: 'center'
      }}
      px={{ lg: 55, base: '5px' }}
      my={[20, 20, 20, 0]}
    >
      <Fade left>
        <Box color="blue.900">
          <Heading
            textAlign={{ base: 'center', lg: 'left' }}
            fontSize={['4xl', '5xl', '6xl']}
          >
            Habilationn FDFP
          </Heading>
          <Heading
            textAlign={{ base: 'center', lg: 'left' }}
            fontSize={['4xl', '5xl', '6xl']}
            my={30}
          >
            Agrement agence <br /> Emploi jeunes
          </Heading>
          <HStack>
            <NextLink href="/contact">
              <Button
                color="blue.900"
                size="lg"
                fontSize={['xl', '3xl']}
                fontWeight="bold"
                borderRadius="full"
                colorScheme="green"
                mx="20px"
                my={15}
                p={['25px', '35px', '45px']}
              >
                CONTACT
              </Button>
            </NextLink>
            <NextLink href="/services">
              <Button
                color="blue.900"
                size="lg"
                fontSize={['xl', '3xl']}
                fontWeight="bold"
                borderRadius="full"
                colorScheme="green"
                mx="20px"
                my={15}
                p={['25px', '35px', '45px']}
              >
                SERVICES
              </Button>
            </NextLink>
          </HStack>
        </Box>
      </Fade>
      <Fade right>
        <Box pos="relative">
          <Image
            src="/hero.png"
            display={{
              base: 'none',
              lg: 'block'
            }}
            maxH={800}
          />
          <Elipse />
        </Box>
      </Fade>
    </Flex>
  );
}

export const Elipse = (props) => (
  <Image
    src="/ellipse.png"
    display={{
      base: 'none',
      lg: 'block'
    }}
    pos="absolute"
    top={0}
    right="-100px"
    zIndex={-1}
    {...props}
  />
);
