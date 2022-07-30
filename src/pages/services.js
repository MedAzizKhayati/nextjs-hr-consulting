import { Box, SimpleGrid } from '@chakra-ui/react';
import CustomHeading from '@components/CustomHeading';
import CustomCard from '@components/CustomCard';
import FORMATIONS from '@data/formations';
import Fade from 'react-reveal/Fade';

export default function Services() {
  return (
    <Box px={10}>
      <Fade left>
        <CustomHeading title={'Services'} mb={20} />
      </Fade>

      <SimpleGrid minChildWidth="400px" spacing={10}>
        {FORMATIONS.map((formation, index) => (
          <CustomCard key={index} title={formation.title} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
