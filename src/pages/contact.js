import { Center } from '@chakra-ui/react';
import ContactForm from '@components/ContactForm';
import MessageBackground from '@components/MessageBackground';

export default function Contact() {
  return (
    <Center pos="relative">
      <MessageBackground />
      <ContactForm mb={40} />
    </Center>
  );
}
