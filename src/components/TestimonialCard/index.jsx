import { StarIcon } from '@chakra-ui/icons';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export default function TestimonialCard({ testimonial, ...props }) {
  return (
    <Flex
      flexDir={['column', 'column', 'column', 'row']}
      p={20}
      justifyContent="space-around"
      alignItems="center"
      {...props}
    >
      <Flex flex={1} justifyContent="center">
        <Box pos="relative" mb={10}>
          <Image
            borderRadius="md"
            w={350}
            h={420}
            fit="cover"
            src={
              testimonial.image ||
              'https://picsum.photos/350/' + Math.floor(Math.random() * 5 + 400)
            }
          />
          <FloatingCircle bg="blue.900" top={-10} left={-10} />
          <FloatingCircle left={-20} top={-20} zIndex={-2} />
          <FloatingCircle boxSize={40} right={-20} bottom={-20} />
        </Box>
      </Flex>

      <Box flex={1}>
        <Image src="“.png" mb={5} />
        <Flex mb={5}>
          {Array(testimonial.testimonial.rating)
            .fill(0)
            .map((_, index) => (
              <StarIcon fontSize="4xl" color="green.400" key={index} />
            ))}
        </Flex>
        <Text fontSize="2xl" color="blue.900" fontWeight="bold" mb={20}>
          {testimonial.description}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {testimonial.testimonial.fullName}
        </Text>
        <Text color="teal.600" fontSize="lg">
          {testimonial.testimonial.occupation}
        </Text>
      </Box>
    </Flex>
  );
}

const FloatingCircle = (props) => (
  <Box
    bg="green.400"
    boxSize={20}
    pos="absolute"
    rounded="full"
    zIndex={-1}
    {...props}
  />
);
