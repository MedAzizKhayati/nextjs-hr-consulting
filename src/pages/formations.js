import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react';
import CustomHeading from '@components/CustomHeading';
import CustomCard from '@components/CustomCard';
import Fade from 'react-reveal/Fade';
import { GET_FORMATIONS } from '@services/formations.service';
import { appoloClient, mapResultsSsr } from '@services/appolo-config';
import NextLink from 'next/link';

export default function Formations({ formations_: formations }) {
  const delayMod = useBreakpointValue(
    {
      base: 1,
      md: 2,
      lg: 2,
      xl: 4
    },
    {
      fallback: 1
    }
  );

  return (
    <Box px={10}>
      <Fade left>
        <Flex
          mb={20}
          flexDir={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          gap={10}
        >
          <CustomHeading title={'Formations'} />
          <VStack alignItems="stretch">
            <NextLink href="/instructors">
              <Button
                rounded="full"
                size="lg"
                fontSize="xl"
                colorScheme="green"
              >
                Voir Formateurs
              </Button>
            </NextLink>
            <NextLink href="/custom-formation">
              <Button
                rounded="full"
                size="lg"
                fontSize="xl"
                colorScheme="green"
              >
                Formation Sur Mesure
              </Button>
            </NextLink>
          </VStack>
        </Flex>
      </Fade>
      {/* <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 2,
          xl: 4
        }}
        spacing={10}
      > */}
      <Flex justifyContent="center" gap={10} flexWrap="wrap">
        {formations.map((formation, index) => (
          <CustomCard
            delay={(index % delayMod) * 150}
            key={formation.id}
            {...formation}
          />
        ))}
      </Flex>
    </Box>
  );
}

export const getServerSideProps = async ({ req }) => {
  const formations_ = mapResultsSsr(
    await appoloClient.query({
      query: GET_FORMATIONS
    })
  );

  return {
    props: {
      formations_
    }
  };
};
