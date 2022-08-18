import { Box, SimpleGrid } from '@chakra-ui/react';
import CustomHeading from '@components/CustomHeading';
import CustomCard from '@components/CustomCard';
import Fade from 'react-reveal/Fade';
import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { GET_FORMATIONS } from '@services/formations.service';
import {
  appoloClient,
  mapResults,
  mapResultsSsr
} from '@services/appolo-config';

export default function Formations({ formations_ }) {
  const [formations, setFormations] = useState(formations_ || []);

  // const { loading, error, data } = useQuery(GET_FORMATIONS);

  // useEffect(() => {
  //   if (loading) return;
  //   if (error) return console.log(error);
  //   const mappedData = mapResults(data);
  //   setFormations(mappedData);
  // }, [loading]);

  return (
    <Box px={10}>
      <Fade left>
        <CustomHeading title={'Formations'} mb={20} />
      </Fade>

      <SimpleGrid minChildWidth={{ base: 300, md: '400px' }} spacing={10}>
        {formations.map((formation, index) => (
          <CustomCard
            delay={(index % 4) * 150}
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
