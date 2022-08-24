import { Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { CgDanger } from 'react-icons/cg';
export default function _404() {
  return (
    <VStack mb={80}>
      <Icon as={CgDanger} color="red.500" w={150} h={150} />
      <Heading fontSize="5xl">404 : Page non trouvée</Heading>
      <Text>Page non trouvée</Text>
    </VStack>
  );
}
