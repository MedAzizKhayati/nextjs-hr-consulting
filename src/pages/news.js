import { Box, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import CustomHeading from '@components/CustomHeading';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import ServiceCard from '@components/ServiceCard';
import { GET_NEWS } from '@services/news.service';
import { appoloClient, mapResultsSsr } from '@services/appolo-config';
import NewsCard from '@components/NewsCard';

export default function News({ news }) {
  const delayMod = useBreakpointValue(
    {
      base: 1,
      md: 2,
      lg: 2,
      xl: 4
    },
    {
      fallback: 1
    }
  );

  return (
    <Box px={10}>
      <Fade left>
        <CustomHeading title={'Actualités'} mb={20} />
      </Fade>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 2,
          xl: 4
        }}
        spacing={10}
        mb={20}
      >
        {news.map((news, index) => (
          <NewsCard
            delay={(index % delayMod) * 150}
            key={news.id}
            news={news}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export const getServerSideProps = async () => {
  const news = mapResultsSsr(
    await appoloClient.query({
      query: GET_NEWS
    })
  );

  return {
    props: {
      news
    }
  };
};
