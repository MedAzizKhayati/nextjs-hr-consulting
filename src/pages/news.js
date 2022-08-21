import { Box } from '@chakra-ui/react';
import CustomHeading from '@components/CustomHeading';
import SERVICES from '@data/services';
import Fade from 'react-reveal/Fade';
import ServiceCard from '@components/ServiceCard';
import { GET_NEWS } from '@services/news.service';
import { appoloClient, mapResultsSsr } from '@services/appolo-config';

export default function News({ news_ }) {
  return (
    <Box px={10}>
      <Fade left>
        <CustomHeading title={'News'} mb={20} />
      </Fade>
      <Box>
        {news_.map((formation, index) => (
          <ServiceCard
            key={index}
            reverse={1}
            consult={false}
            {...formation}
          />
        ))}
      </Box>
    </Box>
  );
}

export const getServerSideProps = async () => {
  const news_ = mapResultsSsr(
    await appoloClient.query({
      query: GET_NEWS
    })
  );

  return {
    props: {
      news_
    }
  };
};
