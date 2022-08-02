import { Center, Image } from '@chakra-ui/react';
import ResumeForm from '@components/ResumeForm';

export default function SendResume() {
  return (
    <Center pos="relative">
      <Image
        zIndex={-1}
        pos="absolute"
        src="/message-background.png"
        left="-40%"
        top="-100px"
      />
      <ResumeForm />
    </Center>
  );
}
