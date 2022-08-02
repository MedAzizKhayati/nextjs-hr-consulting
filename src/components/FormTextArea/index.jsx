import { Textarea } from '@chakra-ui/react';

export default function FormTextArea(props) {
  return (
    <Textarea
      bg="green.100"
      size="lg"
      rows={6}
      resize="none"
      borderColor="green.400"
      color="blue.900"
      fontWeight="bold"
      focusBorderColor="green.600"
      _placeholder={{ opacity: 0.7, color: 'green.400', fontWeight: 'bold' }}
      mb={35}
      {...props}
    />
  );
}
