import { Center, Image } from '@chakra-ui/react';
import MessageBackground from '@components/MessageBackground';
import ResumeForm from '@components/ResumeForm';

export default function SendResume() {
  return (
    <Center pos="relative">
      <MessageBackground />
      <ResumeForm />
    </Center>
  );
}
