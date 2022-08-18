import {
  Box,
  Button,
  Flex,
  Img as Image,
  SimpleGrid,
  Text
} from '@chakra-ui/react';
import CustomHeading from '@components/CustomHeading';
import Fade from 'react-reveal/Fade';

export default function ServiceCard({
  image,
  title,
  reverse = false,
  ...otherProps
}) {
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
          size="xl"
          textAlign="center"
          width="auto"
          title={title}
          lineWidth={100}
          display={{ base: 'block', lg: 'none' }}
        />
        <Box
          flex={1}
          objectFit="cover"
          overflow="hidden"
          pos={'relative'}
          rounded="lg"
          alignItems="end"
        >
          <Image
            margin="auto"
            float={{ lg: reverse ? 'right' : 'left' }}
            borderRadius={10}
            fit="cover"
            h={{ base: 300, md: 400 }}
            src={
              image ||
              'https://picsum.photos/600/' +
                Math.floor(Math.random() * 30 + 400)
            }
          />
        </Box>
        {/* <Flex
          flex={1}
          justifyContent={{ base: 'center', lg: 'flex-start' }}
          pos="relative"
        >
          
        </Flex> */}
        <Flex
          h={400}
          flexDir="column"
          justifyContent={{ base: 'flex-start', lg: 'space-between' }}
          alignItems={{ base: 'center', lg: 'flex-start' }}
          fontSize="2xl"
          order={{ lg: reverse ? -1 : 1 }}
        >
          <CustomHeading
            fontSize="4xl"
            title={title}
            width="auto"
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
