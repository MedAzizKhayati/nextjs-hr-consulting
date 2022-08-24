import { Flex, Text, Box, Center, Heading } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import Zoom from 'react-reveal/Zoom';
import { useEffect, useRef } from 'react';
import { Icon } from '@chakra-ui/react';

export default function SimpleCard({
  title,
  description,
  delay = 0,
  icon,
  canHover = true,
  ...otherProps
}) {
  const zoomRef = useRef(null);
  useEffect(() => {
    zoomRef.current.querySelector('div').style.height = '100%';
  }, []);

  return (
    <Center {...otherProps} ref={zoomRef}>
      <Zoom delay={delay}>
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
          h="100%"
          pos="relative"
        >
          <Icon
            as={icon || CalendarIcon}
            color="green.400"
            w={20}
            h={20}
            my={25}
            opacity={0.9}
          />

          <Heading
            fontSize="2xl"
            mb={15}
            textTransform="uppercase"
            color="blue.900"
          >
            {title}
          </Heading>
          <Text mb={20} fontSize="2xl" color="blue.900">
            {description ??
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum\
              dolor sit amet, consectetur adipiscing elit.'}
          </Text>
          <Box
            w="93%"
            bg="green.400"
            pos="absolute"
            bottom="15px"
            h="4px"
            borderRadius="full"
          />
        </Flex>
      </Zoom>
    </Center>
  );
}
