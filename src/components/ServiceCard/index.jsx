import {
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text
} from '@chakra-ui/react';
import CustomHeading from '@components/CustomHeading';
import Fade from 'react-reveal/Fade';

export default function ServiceCard({ title, reverse = false, ...otherProps }) {
  return (
    <Fade right={!reverse} left={!!reverse}>
      <SimpleGrid
        columns={[1, 1, 1, 2]}
        spacing={10}
        color="teal.900"
        my={40}
        {...otherProps}
      >
        <CustomHeading
          justifySelf="center"
          fontSize="5xl"
          title={title}
          lineWidth={100}
          display={{ base: 'block', lg: 'none' }}
        />
        <Flex
          flex={1}
          justifyContent={{ base: 'center', lg: 'flex-start' }}
          pos="relative"
        >
          <Image
            borderRadius={10}
            src={
              'https://picsum.photos/600/' +
              Math.floor(Math.random() * 30 + 400)
            }
          />
        </Flex>
        <Flex
          h={400}
          flexDir="column"
          justifyContent={{ base: 'flex-start', lg: 'space-between' }}
          alignItems={{ base: 'center', lg: 'flex-start' }}
          fontSize="2xl"
          order={{ lg: reverse ? -1 : 1 }}
        >
          <CustomHeading
            fontSize="5xl"
            title={title}
            lineWidth={100}
            display={{ base: 'none', lg: 'block' }}
          />
          <Text mb={10} fontSize={{ base: 'xl', md: '2xl' }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
          <Button fontSize="4xl" p="10" borderRadius="full" colorScheme="green">
            Consulter
          </Button>
        </Flex>
      </SimpleGrid>
    </Fade>
  );
}
