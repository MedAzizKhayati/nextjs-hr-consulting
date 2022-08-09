import { StarIcon } from '@chakra-ui/icons';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

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
            src={
              'https://picsum.photos/350/' +
              Math.floor(Math.random() * 5 + 400)
            }
          />  
          <Image
            boxSize="800px"
            src="/testimonials-background.png"
            pos="absolute"
            top={-10}
            left={-10}
            zIndex={-1}
            width="120%"
          />
        </Box>
      </Flex>
      <Box flex={1}>
        <Image src="“.png" mb={5} />
        <Flex mb={5}>
          {Array(testimonial.rating)
            .fill(0)
            .map((_, index) => (
              <StarIcon fontSize="4xl" color="green.400" key={index} />
            ))}
        </Flex>
        <Text fontSize="2xl" color="blue.900" fontWeight="bold" mb={20}>
          {testimonial.description}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {testimonial.fullName}
        </Text>
        <Text color="teal.600" fontSize="lg">
          {testimonial.occupation}
        </Text>
      </Box>
    </Flex>
  );
}
