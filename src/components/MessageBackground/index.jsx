import { Image } from '@chakra-ui/react';
import Zoom from 'react-reveal/Zoom';
export default function MessageBackground(props) {
  return (
    
      <Image
        zIndex={-1}
        pos="absolute"
        src="/message-background.png"
        left="-40%"
        top="-100px"
        {...props}
      />
  );
}
