import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react';
import SimpleCard from '@components/SimpleCard';
import NextLink from 'next/link';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import WELCOME_SERVICES from '@data/welcome-services';
import HOME_SERVICES from '@data/home-services';
import NEWS from '@data/news';
import NewsCard from '@components/NewsCard';
import SmallNewsCard from '@components/SmallNewsCard';

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
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

      {/* Welcome Services Section */}
      <SimpleGrid
        minChildWidth={['250px', '400px', '450px']}
        spacing={10}
        px={10}
        mb={40}
      >
        {WELCOME_SERVICES.map((service) => (
          <SimpleCard
            key={service.title}
            title={service.title}
            transform={{ base: '', lg: 'translateY(-25px)' }}
            canHover={false}
          />
        ))}
      </SimpleGrid>

      {/* Why Choose us Section */}
      <Flex px={10} pos="relative">
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
      </Flex>

      {/* Services Section */}
      <Flex flexDir="column">
        <Heading
          fontSize={{ base: '5xl', md: '6xl', lg: '7xl' }}
          color="blue.900"
          textAlign="center"
          my={40}
        >
          NOS SERVICES
        </Heading>

        <SimpleGrid
          minChildWidth={['250px', '400px', '450px']}
          spacing={10}
          my={10}
          px={10}
        >
          {HOME_SERVICES.map((service) => (
            <SimpleCard key={service.title} title={service.title} />
          ))}
        </SimpleGrid>
      </Flex>

      {/* Testimonials Section */}
      <Flex flexDir="column" mb={40}>
        <Heading color="blue.900" size="3xl" textAlign="center">
          TÉMOIGNAGES
        </Heading>
        <Heading color="blue.600" size="sm" textAlign="center">
          97% DE NOS CLIENTS SONT SATISFAITS
        </Heading>
        <Flex>{/* TODO: Add testimonials */}</Flex>
      </Flex>

      {/* News Section */}
      <Box px={[15, 20]}>
        <Flex justifyContent="space-between" mb={10}>
          <Heading color="blue.900" fontSize="4xl">
            ACTUALITÉS
          </Heading>
          <Button size="lg" fontSize="xl" colorScheme="green" borderRadius="sm">
            Voir Plus
          </Button>
        </Flex>
        <Flex
          flexDir={{base: 'column', md: 'column',lg:'column', xl:'row'}}
          alignItems={{ base: 'center', md: 'center', lg: "center", xl:"flex-start" }}
          justifyContent="space-between"
        >
          {NEWS.slice(0, 2).map((news) => (
            <NewsCard {...{ news }} mb={10} />
          ))}
          <Box mb={10}>
            {NEWS.slice(2, 6).map((news, index) => (
              <>
                <SmallNewsCard key={index} {...{ news }} mb={5} mx={15} />
                <Box
                  h="2px"
                  bg="green.200"
                  opacity={0.5}
                  mb={5}
                  mx={15}
                  borderRadius="full"
                />
              </>
            ))}
          </Box>
        </Flex>
      </Box>

      {/* Statistics Section */}
      <Flex mb={40} alignItems="center" flexDir="column">
        <Zoom>
          <Flex mb={20} alignItems="center" flexDir="column">
            <Heading color="blue.900" size="3xl" textAlign="center">
              HR CONSULTING & CO
            </Heading>
            <Heading color="green.400">En quelques chiffres</Heading>
          </Flex>
        </Zoom>

        <SimpleGrid columns={[1, 1, 1, 3]} spacing={10} px={10}>
          {STATISTICS_DATA.map((statistic) => (
            <VisibilitySensor key={statistic.description} partialVisibility>
              {({ isVisible }) => (
                <Zoom>
                  <Flex
                    p={20}
                    flexDir="column"
                    alignItems="center"
                    justifyContent="center"
                    bg="green.600"
                    borderRadius="3xl"
                    boxShadow="dark-lg"
                    h={350}
                    maxW={450}
                  >
                    <Heading fontSize="5xl" color="blue.900">
                      {isVisible ? (
                        <CountUp
                          end={statistic.numbers}
                          duration={1 + Math.random() * 2}
                        />
                      ) : (
                        0
                      )}
                    </Heading>
                    <Text textAlign="center" fontSize="lg" color="white">
                      {statistic.description}
                    </Text>
                  </Flex>
                </Zoom>
              )}
            </VisibilitySensor>
          ))}
        </SimpleGrid>
      </Flex>

      {/* Resume Section */}
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
        </Flex>
      </Flex>
    </Box>
  );
}

const STATISTICS_DATA = [
  {
    icon: '',
    numbers: '1795',
    description: 'Nombre de professionnels formés en 5 ans'
  },
  {
    icon: '',
    numbers: '85',
    description: 'Nombre des entreprises bénifiçaires'
  },
  {
    icon: '',
    numbers: 60,
    description: 'Formateurs experts'
  }
];

const Elipse = (props) => (
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
