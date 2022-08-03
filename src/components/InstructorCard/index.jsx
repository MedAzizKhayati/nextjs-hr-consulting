import {
  Avatar,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack
} from '@chakra-ui/react';
import { SiFacebook, SiTwitter, SiPinterest } from 'react-icons/si';
import Zoom from 'react-reveal/Zoom';

const icons = [SiFacebook, SiTwitter, SiPinterest];

export default function InstructorCard({ instructor, ...otherProps }) {
  return (
    <Zoom>
      <VStack
        borderRadius="3xl"
        boxShadow="xl"
        maxW="max-content"
        bg="white"
        px={20}
        py={10}
        spacing={15}
        mb={10}
        {...otherProps}
      >
        <Avatar mb={25} size="2xl" src="https://bit.ly/dan-abramov" />
        <Heading textAlign="center" color="#666666" fontSize="lg">
          {instructor?.fullName || 'Dan Abrahmov'}
        </Heading>
        <Text color="#666666" fontSize="md">
          FORMATEUR
        </Text>
        <HStack>
          {icons.map((Icon, index) => (
            <IconButton
              color="green.400"
              key={index}
              icon={<Icon />}
              fontSize="3xl"
              variant="ghost"
              borderRadius="full"
            />
          ))}
        </HStack>
      </VStack>
    </Zoom>
  );
}
