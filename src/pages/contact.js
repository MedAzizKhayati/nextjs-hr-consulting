import { Center, Image } from '@chakra-ui/react';
import ContactForm from '@components/ContactForm';

export default function Contact() {
  return (
    <Center pos="relative">
      <Image
        zIndex={-1}
        pos="absolute"
        src="/message-background.png"
        left="-40%"
        top="-100px"
      />
      <ContactForm mb={40} />
    </Center>
  );
}
