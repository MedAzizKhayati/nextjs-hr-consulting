import { Flex, Heading } from '@chakra-ui/react';
// import testimonials from '@data/testimonials';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';
import TestimonialCard from '@components/TestimonialCard';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_TESTIMONIALS } from '@services/testimonilas.service';
import { mapResults } from '@services/appolo-config';
import Fade from 'react-reveal/Fade';

export default function TestimonialsSection() {
  const { error, data, loading } = useQuery(GET_TESTIMONIALS);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    if (loading) return;
    if (error) return console.log('error', error);
    console.log('data', mapResults(data));
    setTestimonials(mapResults(data));
  }, [loading]);

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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Fade>
    </Flex>
  );
}
