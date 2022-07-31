import { Box, Button, Flex, Heading, HStack, Image } from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';

export default function Home() {
  return (
    <Box>
      <Flex flexDir="row" alignItems="center" justifyContent="space-around">
        <Fade left>
          <Box color="blue.900" px={{ md: '25px' }}>
            <Heading fontSize="7xl">Habilationn FDFP</Heading>
            <Heading fontSize="7xl" my={20}>
              Agrement agence <br /> Emploi jeunes
            </Heading>
            <HStack>
              <Button
                color="blue.900"
                size="lg"
                fontSize="3xl"
                fontWeight="bold"
                borderRadius="full"
                colorScheme="green"
                mx="20px"
                my={15}
                p="50px"
              >
                CONTACT
              </Button>
              <Button
                color="blue.900"
                size="lg"
                fontSize="3xl"
                fontWeight="bold"
                borderRadius="full"
                colorScheme="green"
                mx="20px"
                my={15}
                p="50px"
              >
                SERVICES
              </Button>
            </HStack>
          </Box>
        </Fade>
        <Fade right>
          <Image src="/hero.png" />
        </Fade>
      </Flex>
    </Box>
  );
}
