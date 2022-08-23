import { Flex, Heading } from '@chakra-ui/react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';
import TestimonialCard from '@components/TestimonialCard';
import Fade from 'react-reveal/Fade';

export default function TestimonialsSection({ testimonials }) {
  return (
    <Flex flexDir="column" mb={40}>
      <Heading color="blue.900" size="3xl" textAlign="center">
        TÉMOIGNAGES
      </Heading>
      <Heading color="blue.600" size="sm" textAlign="center">
        97% DE NOS CLIENTS SONT SATISFAITS
      </Heading>
      <Fade left>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          style={{
            width: '100%'
          }}
        >
          {testimonials?.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Fade>
    </Flex>
  );
}

