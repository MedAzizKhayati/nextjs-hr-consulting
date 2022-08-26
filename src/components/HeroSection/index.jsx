import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Img as Image,
  Text
} from '@chakra-ui/react';
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
      my={[10, 20, 20, 0]}
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
            Agrément agence <br /> Emploi jeunes
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
                p={['25px', '35px', '40px']}
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
                p={['25px', '35px', '40px']}
              >
                SERVICES
              </Button>
            </NextLink>
          </HStack>
        </Box>
      </Fade>
      <Fade right>
        <Box pos="relative">
          <Flex
            p={5}
            rounded="xl"
            boxShadow="lg"
            pos="absolute"
            top={0}
            left={-20}
            bg="white"
            alignItems="center"
            flexDir="column"
            display={{
              base: 'none',
              xl: 'flex'
            }}
          >
            <Flex mb={7} w="100%" gap={7} justifyContent="space-between">
              <Text fontWeight="medium">Recrutement</Text>
              <Text fontWeight="medium">2022</Text>
            </Flex>
            <Flex mb={2} w="100%" justifyContent="space-between">
              <Text color="teal.500" fontWeight="medium">
                87,4%
              </Text>
              <Text color="teal.500" fontWeight="medium">
                $648
              </Text>
            </Flex>
            <Box
              rounded="full"
              w="100%"
              h={2}
              bg="teal.100"
              pos="relative"
              _after={{
                content: '""',
                width: '60%',
                height: '100%',
                background: 'green.500',
                position: 'absolute',
                top: '0',
                left: '0',
                rounded: 'full'
              }}
            />
            <Box
              pos="absolute"
              borderX="15px solid transparent"
              borderTop="25px solid"
              borderTopColor="white"
              bottom="-20px"
            />
          </Flex>
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
