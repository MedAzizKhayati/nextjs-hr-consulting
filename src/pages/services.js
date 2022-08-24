import { Box } from '@chakra-ui/react';
import CustomHeading from '@components/CustomHeading';
import SERVICES from '@data/services';
import Fade from 'react-reveal/Fade';
import ServiceCard from '@components/ServiceCard';

export default function Services() {
  return (
    <Box px={10}>
      <Fade left>
        <CustomHeading title={'Services'} mb={20} />
      </Fade>

      <Box>
        {SERVICES.map((formation, index) => (
          <ServiceCard key={index} reverse={index % 2} {...formation} />
        ))}
      </Box>
    </Box>
  );
}
