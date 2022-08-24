import { Box, Button, Flex, Img, SimpleGrid, Text } from '@chakra-ui/react';
import CustomHeading from '@components/CustomHeading';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import NextLink from 'next/link';

export default function About() {
  return (
    <Box px={10}>
      <Fade left>
        <CustomHeading
          title={'A propos'}
          lineWidth={30}
          my={20}
          fontSize={{ base: '5xl', md: '7xl' }}
        />
      </Fade>
      <Flex flexDir={["column-reverse", "column-reverse", 'column-reverse', "row"]} alignItems="center" gap={20}>
        <Box maxW={["unset", "unset", 'unset', "50%"]}>
          <Fade left>
            <CustomHeading title="HR CONSULTING & CO" fontSize="4xl" mb={10} />
            <Text textAlign="justify" fontSize={{ base: 'lg', md: '2xl' }} mb={20}>
              est un cabinet de recrutement, de formation, de conseil et de
              gestion des ressources humaines. Notre objectif, donner aux hommes
              la possibilité d'exprimeret d'investir leurs potentiels au service
              de Développement de l'entreprise. Specialiste en Développement
              humain, HRCONSULTING&CO accompagne les entreprises et
              organisations sur l'ensemble de leurs problematiques ressources
              humaines et managériales. c'est pourquoi, une mission aussi
              complexe et ambitieuse, nous engage donc a travailler avec des
              experts et consultants hautement qualifiés et experimentés.
            </Text>
            <NextLink href="/contact">
              <Button
                fontWeight="light"
                colorScheme="green"
                p={25}
                borderRadius="sm"
                rounded="full"
                mb={20}
                size="lg"
              >
                CONTACTER NOUS
              </Button>
            </NextLink>
          </Fade>
        </Box>
        <Zoom>
          <Box mt={20} minH={[100, 200, 350, 650]}>
            <Img
              borderRadius="lg"
              src={'https://hrconsultingco.ci/img/about/ab.jpg'}
            />
          </Box>
        </Zoom>
      </Flex>
    </Box>
  );
}
