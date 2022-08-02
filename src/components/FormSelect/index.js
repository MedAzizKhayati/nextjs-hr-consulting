import { Select } from '@chakra-ui/react';

export default function FormSelect(props) {
  return (
    <Select
      color="green.400"
      opacity={0.7}
      fontWeight="bold"
      borderColor="green.400"
      variant="flushed"
      focusBorderColor="green.400"
      mb={20}
      {...props}
    >
      {props.children}
    </Select>
  );
}
