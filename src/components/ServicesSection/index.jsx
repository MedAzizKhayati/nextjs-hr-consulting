import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import SimpleCard from '@components/SimpleCard';
import HOME_SERVICES from '@data/home-services';
import NextLink from 'next/link';

export default function ServicesSection() {
  return (
    <Flex flexDir="column">
      <Heading
        fontSize={{ base: '5xl', md: '6xl', lg: '7xl' }}
        color="blue.900"
        textAlign="center"
        my={40}
      >
        NOS SERVICES
      </Heading>

      <SimpleGrid
        minChildWidth={['250px', '400px', '450px']}
        spacing={10}
        my={10}
        px={10}
      >
        {HOME_SERVICES.map((service, index) => (
          <NextLink key={index} href={service.href}>
            <SimpleCard delay={(index % 3) * 150} key={index} {...service} />
          </NextLink>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
