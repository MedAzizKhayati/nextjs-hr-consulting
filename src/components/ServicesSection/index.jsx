import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import SimpleCard from '@components/SimpleCard';
import HOME_SERVICES from '@data/home-services';
import NextLink from 'next/link';

import { GiFairyWand } from 'react-icons/gi';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { AiOutlineExpand } from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
import { TbFileCertificate } from 'react-icons/tb';
import { FaHistory } from 'react-icons/fa';

const icons = [
  TbFileCertificate,
  AiOutlineFileAdd,
  GiFairyWand,
  FaHistory,
  AiOutlineExpand,
  BsBriefcase
];

export default function ServicesSection() {
  return (
    <Flex flexDir="column" my={40}>
      <Heading
        fontSize={{ base: '5xl', md: '6xl', lg: '7xl' }}
        color="blue.900"
        textAlign="center"
        my={40}
      >
        NOS SERVICES
      </Heading>

      {/* <SimpleGrid
        minChildWidth={['250px', '400px', '450px']}
        spacing={10}
        my={10}
        px={10}
      > */}
      <Flex justifyContent="center" gap={5} flexWrap="wrap" mb={20}>
        {HOME_SERVICES.map((service, index) => (
          <NextLink key={index} href={service.href}>
            <SimpleCard
              icon={icons[index % icons.length]}
              delay={(index % 3) * 150}
              key={index}
              {...service}
            />
          </NextLink>
        ))}
      </Flex>
    </Flex>
  );
}
