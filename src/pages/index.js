import { Box } from '@chakra-ui/react';
import HeroSection from '@components/HeroSection';
import WelcomeSection from '@components/WelcomeSection';
import WhyChooseUsSection from '@components/WhyChooseUsSection';
import ServicesSection from '@components/ServicesSection';
import TestimonialsSection from '@components/TestimonialsSection';
import NewsSection from '@components/NewsSection';
import StatisticsSection from '@components/StatisticsSection';
import ResumeSection from '@components/ResumeSection';

export default function Home() {
  return (
    <Box mt={-20}>
      <HeroSection />

      <WelcomeSection />

      <WhyChooseUsSection />

      <ServicesSection />

      <TestimonialsSection />

      <NewsSection />

      <StatisticsSection />

      <ResumeSection />
    </Box>
  );
}
