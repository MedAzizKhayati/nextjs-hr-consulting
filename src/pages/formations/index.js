import { Box, Button, Flex, useBreakpointValue } from '@chakra-ui/react';
import CustomHeading from '@components/CustomHeading';
import CustomCard from '@components/CustomCard';
import Fade from 'react-reveal/Fade';
import { GET_FORMATIONS } from '@services/formations.service';
import { appoloClient, mapResultsSsr } from '@services/appolo-config';
import NextLink from 'next/link';

export default function Formations({ formations }) {
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
        </Flex>
      </Fade>
      <Flex justifyContent="center" gap={10} flexWrap="wrap" mb={20}>
        {formations.map((formation, index) => (
          <CustomCard
            delay={(index % delayMod) * 150}
            key={formation.id}
            {...formation}
          />
        ))}
        <CustomCard
          delay={(formations.length % delayMod) * 150}
          title="Formation sur mesure"
          description="Vous avez besoin d'une formation sur mesure ? Contactez-nous"
          image="/formation-sur-mesure.png"
          href="/custom-formation"
        />
      </Flex>
    </Box>
  );
}

export const getServerSideProps = async ({ req }) => {
  const formations = mapResultsSsr(
    await appoloClient.query({
      query: GET_FORMATIONS
    })
  );

  return {
    props: {
      formations
    }
  };
};
