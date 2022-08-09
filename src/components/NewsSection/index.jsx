import { Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import NEWS from '@data/news';
import NewsCard from '@components/NewsCard';
import SmallNewsCard from '@components/SmallNewsCard';

export default function NewsSection() {
  return (
    <Box px={[15, 20]}>
      <Flex justifyContent="space-between" mb={10}>
        <Heading color="blue.900" fontSize="4xl">
          ACTUALITÉS
        </Heading>
        <NextLink href="/news">
          <Button size="lg" fontSize="xl" colorScheme="green" borderRadius="sm">
            Voir Plus
          </Button>
        </NextLink>
      </Flex>
      <Flex
        flexDir={{ base: 'column', md: 'column', lg: 'column', xl: 'row' }}
        alignItems={{
          base: 'center',
          md: 'center',
          lg: 'center',
          xl: 'flex-start'
        }}
        justifyContent="space-between"
      >
        {NEWS.slice(0, 2).map((news, index) => (
          <Zoom key={index}>
            <NewsCard {...{ news }} mb={10} />
          </Zoom>
        ))}
        <Fade right>
          <Box mb={10}>
            {NEWS.slice(2, 6).map((news, index) => (
              <Box key={index}>
                <SmallNewsCard key={index} {...{ news }} mb={5} mx={15} />
                <Box
                  h="2px"
                  bg="green.200"
                  opacity={0.5}
                  mb={5}
                  mx={15}
                  borderRadius="full"
                />
              </Box>
            ))}
          </Box>
        </Fade>
      </Flex>
    </Box>
  );
}
