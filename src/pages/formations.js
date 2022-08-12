import { Box, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import CustomHeading from '@components/CustomHeading';
import CustomCard from '@components/CustomCard';
import FORMATIONS from '@data/formations';
import Fade from 'react-reveal/Fade';

export default function Formations() {
  const [formations, setFormations] = useState(FORMATIONS);

  return (
    <Box px={10}>
      <Fade left>
        <CustomHeading title={'Formations'} mb={20} />
      </Fade>

      <SimpleGrid minChildWidth={{ base: 300, md: '400px' }} spacing={10}>
        {formations.map((formation) => (
          <CustomCard key={formation.id} {...formation} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
