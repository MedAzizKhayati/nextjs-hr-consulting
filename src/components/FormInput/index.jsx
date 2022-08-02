import { Input } from "@chakra-ui/react";

export default function FormInput({ ...otherProps }) {
  return (
    <Input
      _placeholder={{ opacity: 0.7, color: 'green.400', fontWeight: 'bold' }}
      color="blue.900"
      fontWeight="bold"
      borderColor="green.400"
      variant="flushed"
      focusBorderColor="green.400"
      {...otherProps}
    />
  );
}
