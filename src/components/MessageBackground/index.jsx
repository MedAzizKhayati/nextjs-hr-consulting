import { Image } from '@chakra-ui/react';
export default function MessageBackground(props) {
  return (
      <Image
        zIndex={-1}
        pos="absolute"
        src="/message-background.png"
        left="-200px"
        top="-100px"
        {...props}
        boxSize='1000px'
      />
  );
}
