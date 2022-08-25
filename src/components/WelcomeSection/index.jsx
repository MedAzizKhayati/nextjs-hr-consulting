import { Flex, SimpleGrid } from '@chakra-ui/react';
import SimpleCard from '@components/SimpleCard';
import { BsFileBarGraph, BsGraphUp, BsBank } from 'react-icons/bs';

import WELCOME_SERVICES from '@data/welcome-services';

const icons = [BsFileBarGraph, BsGraphUp, BsBank];
export default function () {
  return (
    // <SimpleGrid
    //   minChildWidth={['250px', '400px', '450px']}
    //   spacing={10}
    //   px={10}
    //   mb={40}
    // >
    <Flex justifyContent="center" gap={5} flexWrap="wrap" mb={20}>
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
