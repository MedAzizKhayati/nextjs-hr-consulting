import { Box, SimpleGrid } from '@chakra-ui/react';
import CustomHeading from '@components/CustomHeading';
import CustomCard from '@components/CustomCard';
import FORMATIONS from '@data/formations';
import Fade from 'react-reveal/Fade';
import { useEffect, useState } from 'react';
import { getAllFormations } from '@services/formations.service';

export default function Formations({ formations_ }) {
  const [formations, setFormations] = useState(formations_);

  useEffect(() => {
    getAllFormations().then(setFormations).catch(console.log);
  }, []);

  return (
    <Box px={10}>
      <Fade left>
        <CustomHeading title={'Formations'} mb={20} />
      </Fade>

      <SimpleGrid minChildWidth={{ base: 300, md: '400px' }} spacing={10}>
        {formations.map((formation, index) => (
          <CustomCard key={formation.id} {...formation} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export const getServerSideProps = async ({ req }) => {
  const formations_ = await getAllFormations();
  return {
    props: {
      formations_
    }
  };
};
