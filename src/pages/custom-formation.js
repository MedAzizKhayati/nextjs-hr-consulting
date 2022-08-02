import { Center, Image } from '@chakra-ui/react';
import CustomFormation from '@components/CustomFormation';
import MessageBackground from '@components/MessageBackground';

export default function CustomFormationPage() {
  return (
    <Center>
      <MessageBackground />
      <CustomFormation />
    </Center>
  );
}
