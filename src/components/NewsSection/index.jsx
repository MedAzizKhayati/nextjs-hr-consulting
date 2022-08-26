import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import NewsCard from '@components/NewsCard';
import SmallNewsCard from '@components/SmallNewsCard';

export default function NewsSection({ news }) {
  return (
    <Box px={[15, 20]} mb={[10, 20]}>
      <Flex justifyContent="space-between" mb={10}>
        <Heading color="blue.900" fontSize="4xl">
          ACTUALITÉS
        </Heading>
        <NextLink href="/news">
          <Button
            rounded="full"
            size="lg"
            fontSize="xl"
            colorScheme="green"
            borderRadius="sm"
          >
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
        {news?.slice(0, 2).map((news, index) => (
          <NewsCard key={index} {...{ news }} mb={10} h="450px" />
        ))}
        <Box mb={10}>
          {news?.slice(2).map((news, index) => (
            <Fade key={index} right>
              <Box>
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
            </Fade>
          ))}
        </Box>
      </Flex>
    </Box>
  );
}
