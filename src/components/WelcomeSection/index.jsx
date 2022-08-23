import { SimpleGrid } from '@chakra-ui/react';
import SimpleCard from '@components/SimpleCard';

import WELCOME_SERVICES from '@data/welcome-services';

export default function () {
  return (
    <SimpleGrid
      minChildWidth={['250px', '400px', '450px']}
      spacing={10}
      px={10}
      mb={40}
    >
      {WELCOME_SERVICES.map((service, index) => (
        <SimpleCard
        delay={index * 150}
          key={index}
          {...service}
          transform={{ base: '', lg: 'translateY(-25px)' }}
          canHover={false}
        />
      ))}
    </SimpleGrid>
  );
}
