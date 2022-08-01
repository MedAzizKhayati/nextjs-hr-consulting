import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text
} from '@chakra-ui/react';
import SimpleCard from '@components/SimpleCard';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import WELCOME_SERVICES from '@data/welcome-services';
import HOME_SERVICES from '@data/home-services';
import CustomHeading from '@components/CustomHeading';

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
            <Button
              fontWeight="light"
              colorScheme="green"
              p={25}
              borderRadius="full"
            >
              CONTACTER
            </Button>
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
        <Heading fontSize="7xl" color="blue.900" textAlign="center" my={40}>
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

      {/* Statistics Section */}
      <Flex mb={40} alignItems="center" flexDir="column">
        <Zoom>
          <Flex mb={20} alignItems="center" flexDir="column">
            <CustomHeading lineWidth={0} title="HR CONSULTING & CO" />
            <Heading color="green.400">En quelques chiffres</Heading>
          </Flex>
        </Zoom>
        <SimpleGrid columns={[1, 1, 1, 3]} spacing={10} px={10}>
          {STATISTICS_DATA.map((statistic) => (
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
                  {statistic.numbers}
                </Heading>
                <Text textAlign="center" fontSize="lg" color="white">
                  {statistic.description}
                </Text>
              </Flex>
            </Zoom>
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
          p={20}
          w="80%"
          flexDir={['column', 'column', 'column', 'row']}
          bg="white"
          borderRadius="2xl"
          alignItems="center"
          justifyContent="center"
        >
          <Heading
            color="blue.900"
            fontSize={['2xl', '4xl', '4xl', '4xl']}
            pr={20}
          >
            Pour Plus De Renseignement veuillez Déposer votre CV ici
          </Heading>
          <Button
            borderRadius="full"
            size="lg"
            fontSize={['xl', '3xl', '3xl', '3xl']}
            fontWeight="normal"
            p={55}
            color="white"
            colorScheme="green"
          >
            Deposer un CV
          </Button>
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
