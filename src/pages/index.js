import { Box } from '@chakra-ui/react';
import HeroSection from '@components/HeroSection';
import WelcomeSection from '@components/WelcomeSection';
import WhyChooseUsSection from '@components/WhyChooseUsSection';
import ServicesSection from '@components/ServicesSection';
import TestimonialsSection from '@components/TestimonialsSection';
import NewsSection from '@components/NewsSection';
import StatisticsSection from '@components/StatisticsSection';
import ResumeSection from '@components/ResumeSection';
import { appoloClient, mapResultsSsr } from '@services/appolo-config';
import { GET_TESTIMONIALS } from '@services/testimonilas.service';
import { GET_NEWS } from '@services/news.service';

export default function Home({ testimonials, news }) {
  return (
    <Box mt={-20}>
      <HeroSection />

      <WelcomeSection />

      <WhyChooseUsSection />

      <ServicesSection />

      <TestimonialsSection testimonials={testimonials} />

      <NewsSection news={news} />

      <StatisticsSection />

      <ResumeSection />
    </Box>
  );
}

export const getServerSideProps = async () => {
  const testimonials = mapResultsSsr(
    await appoloClient.query({
      query: GET_TESTIMONIALS
    })
  );

  const news = mapResultsSsr(
    await appoloClient.query({
      query: GET_NEWS
    })
  );

  return {
    props: {
      testimonials,
      news
    }
  };
};
