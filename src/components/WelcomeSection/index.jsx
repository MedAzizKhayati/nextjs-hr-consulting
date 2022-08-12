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
          key={index}
          title={service.title}
          transform={{ base: '', lg: 'translateY(-25px)' }}
          canHover={false}
        />
      ))}
    </SimpleGrid>
  );
}