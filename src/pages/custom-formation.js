import { Center, Image } from '@chakra-ui/react';
import CustomFormation from '@components/CustomFormation';

export default function CustomFormationPage() {
  return (
    <Center>
      <Image
        zIndex={-1}
        pos="absolute"
        src="/message-background.png"
        left="-40%"
        top="-100px"
      />
      <CustomFormation />
    </Center>
  );
}
