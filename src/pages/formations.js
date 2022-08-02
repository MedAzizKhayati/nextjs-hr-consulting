import { Box, SimpleGrid } from '@chakra-ui/react';
import CustomHeading from '@components/CustomHeading';
import CustomCard from '@components/CustomCard';
import FORMATIONS from '@data/formations';
import Fade from 'react-reveal/Fade';

export default function Formations() {
  return (
    <Box px={10}>
      <Fade left>
        <CustomHeading title={'Formations'} mb={20} />
      </Fade>

      <SimpleGrid minChildWidth={{ base: 300, md: '400px' }} spacing={10}>
        {FORMATIONS.map((formation, index) => (
          <CustomCard key={index} title={formation.title} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
