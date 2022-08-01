import { Box, Image, Text } from '@chakra-ui/react';
import CustomHeading from '@components/CustomHeading';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

export default function About() {
  return (
    <Box px={10}>
      <Fade left>
        <CustomHeading title={'A propos'} lineWidth={30} my={20} />
      </Fade>
      <Zoom>
        <Box my={20}>
          <Image
            borderRadius="lg"
            src={
              'https://picsum.photos/1920/' +
              Math.floor(Math.random() * 30 + 800)
            }
          />
        </Box>
      </Zoom>
      <Fade right>
        <Text fontSize="6xl" my={20}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi,
          eu consectetur nisi nisi euismod, nisi eu consectetur consectetur,
          nisl nisi consectetur nisi, eu consectetur nisi nisi euismod, nisi eu
          consectetur consectetur, nisl nisi consectetur nisi, eu consectetur
          nisi nisi euismod.
        </Text>
      </Fade>
    </Box>
  );
}

