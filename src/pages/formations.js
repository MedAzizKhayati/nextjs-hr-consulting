import { Box, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import CustomHeading from '@components/CustomHeading';
import CustomCard from '@components/CustomCard';
import Fade from 'react-reveal/Fade';
import { GET_FORMATIONS } from '@services/formations.service';
import { appoloClient, mapResultsSsr } from '@services/appolo-config';

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

  console.log(delayMod);

  return (
    <Box px={10}>
      <Fade left>
        <CustomHeading title={'Formations'} mb={20} />
      </Fade>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 2,
          xl: 4
        }}
        spacing={10}
      >
        {formations.map((formation, index) => (
          <CustomCard
            delay={(index % delayMod) * 150}
            key={formation.id}
            {...formation}
          />
        ))}
      </SimpleGrid>
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
