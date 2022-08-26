import { Flex, SimpleGrid } from '@chakra-ui/react';
import SimpleCard from '@components/SimpleCard';
import { BsFileBarGraph, BsGraphUp, BsBank } from 'react-icons/bs';

import WELCOME_SERVICES from '@data/welcome-services';

const icons = [BsFileBarGraph, BsGraphUp, BsBank];
export default function () {
  return (
    <Flex px={5} justifyContent="center" gap={5} flexWrap="wrap" mb={[5, 20]}>
      {WELCOME_SERVICES.map((service, index) => (
        <SimpleCard
          delay={index * 150}
          key={index}
          {...service}
          transform={{ base: '', lg: 'translateY(-25px)' }}
          canHover={false}
          icon={icons[index % icons.length]}
        />
      ))}
    </Flex>
  );
}
