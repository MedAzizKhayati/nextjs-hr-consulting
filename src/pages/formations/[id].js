import { appoloClient, mapResultSsr } from '@services/appolo-config';
import { GET_FORMATION } from '@services/formations.service';
import { Box, Center, Flex, Heading, Img, Text } from '@chakra-ui/react';
import CustomHeading from '@components/CustomHeading';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import OrderFormation from '@components/OrderFormation';
import MessageBackground from '@components/MessageBackground';

export default function Formation({ formation }) {
  return (
    <Box px={[5, 10]} my={10}>
      <Fade left>
        <CustomHeading
          title="Formation"
          my={[5, 20]}
          fontSize={{ base: '5xl', md: '7xl' }}
        />
      </Fade>
      <Flex
        flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
        alignItems="center"
        gap={[10, 20]}
        my={[10, 20]}
      >
        <Box maxW={['unset', 'unset', 'unset', '50%']}>
          <Fade left>
            <Heading color="blue.900" fontSize={['2xl', '4xl']} mb={10}>
              {formation.title}
            </Heading>
            <Text
              textAlign="justify"
              fontSize={{ base: 'lg', md: '2xl' }}
              mb={20}
            >
              {formation.description}
            </Text>
          </Fade>
        </Box>

        <Center w="100%">
          <Zoom>
            <Img
              borderRadius="lg"
              src={
                formation.image || 'https://hrconsultingco.ci/img/about/ab.jpg'
              }
            />
          </Zoom>
        </Center>
      </Flex>
      <Flex w="100%" justifyContent="center">
        <OrderFormation formationTitle={formation.title} />
        <MessageBackground
          top="unset"
          left="unset"
          transform="translate(-25%,-75px)"
        />
      </Flex>
    </Box>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  let formation = null;
  try {
    formation = mapResultSsr(
      await appoloClient.query({
        query: GET_FORMATION,
        variables: {
          id
        }
      })
    );
  } catch (error) {
    console.error(error);
  }

  if (!formation) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    };
  }

  return {
    props: {
      formation
    }
  };
};
