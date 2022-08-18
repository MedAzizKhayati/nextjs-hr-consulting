import { Flex, Text, Box, Center, Heading } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import CustomHeading from '@components/CustomHeading';
import Zoom from 'react-reveal/Zoom';

export default function SimpleCard({
  title,
  delay = 0,
  canHover = true,
  ...otherProps
}) {
  return (
    <Zoom delay={delay}>
      <Center {...otherProps}>
        <Flex
          _hover={
            canHover && {
              boxShadow: 'dark-lg',
              cursor: 'pointer',
              transform: 'scale(1.05)'
            }
          }
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          boxShadow="lg"
          flexDir="column"
          maxW={500}
          p={15}
          bg="white"
          borderRadius="lg"
        >
          <CalendarIcon color="green.400" w={20} h={20} my={25} opacity={0.9} />
          <Heading
            fontSize="2xl"
            mb={15}
            textTransform="uppercase"
            color="blue.900"
          >
            {title}
          </Heading>
          <Text mb={20} fontSize="2xl" color="blue.900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Box w="100%" bg="green.400" h="4px" borderRadius="full" />
        </Flex>
      </Center>
    </Zoom>
  );
}
