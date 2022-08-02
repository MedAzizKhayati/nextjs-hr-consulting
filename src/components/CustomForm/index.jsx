import { Button, Center, Flex, Heading } from '@chakra-ui/react';
import Zoom from 'react-reveal/Zoom';

export default function CustomForm({ title, children, ...otherProps }) {
  return (
    <Zoom>
      <Flex
        flexDir="column"
        w={{
          lg: '800px'
        }}
        bg="#F1F1F1"
        mx={15}
        p={{ base: 35, lg: 20 }}
        borderRadius="xl"
        mb={20}
        {...otherProps}
      >
        <Heading textAlign="center" color="blue.900" fontSize="4xl" mb={20}>
          {title}
        </Heading>
        {children}
        <Center>
          <Button colorScheme="green" borderRadius="full" size="lg">
            Envoyer
          </Button>
        </Center>
      </Flex>
    </Zoom>
  );
}
