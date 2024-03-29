import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Input,
  Button,
  Flex
} from '@chakra-ui/react';
import LinkButton from '@components/Navbar/LinkButton';
import handleHttpRequest from '@utils/handleHttpRequest';
import validateEmail from '@utils/validateEmail';
import axios from 'axios';
import { useState } from 'react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ListHeader = ({ children, ...otherProps }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2} {...otherProps}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  const [email, setEmail] = useState('');
  const subscribeToNewsletter = () => {
    if (!validateEmail(email))
      return toast.warning('Veuillez entrer une adresse e-mail');
    handleHttpRequest(
      axios.post('/api/subscribe', {
        email
      }),
      'Vous êtes bien inscrit à la newsletter'
    );
  };
  return (
    <Box bg="#052345" color="teal.200" pos="relative">
      <Container as={Stack} maxW={'9xl'} py={10} px={{ base: 10, md: 25 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2, xl: 4 }} spacing={10}>
          <Stack align={'flex-start'}>
            <ListHeader color="green.400">Hr Consultin & Co</ListHeader>
            <Text>
              Est un cabinet de recrutement, de formation, de conseil et de
              gestion des ressources humaines.
            </Text>
          </Stack>

          

          <Stack align={'flex-start'}>
            <ListHeader>Liens Pratiques</ListHeader>
            <LinkButton
              href="about"
              title="A propos"
              color="none"
              fontWeight="normal"
            />
            <LinkButton
              href="services"
              title="Services"
              color="none"
              fontWeight="normal"
            />
            <LinkButton
              href="formations"
              title="Formations"
              color="none"
              fontWeight="normal"
            />
            <LinkButton
              href="news"
              title="Actualités"
              color="none"
              fontWeight="normal"
            />
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Informations</ListHeader>
            <Text>
              ABIDJAN - Marcory 1er étage à droite lot 36 Avenue TSF en face de
              la SIB Ste Thérèse
            </Text>
            <Text>Tel: (+255) 20 00 09 47</Text>
            <Text>Tel: (+255) 21 26 94 06</Text>
            <Text>Tel: (+255) 02 91 62 90</Text>
            <Text>E-mail: secretariat@hrconsultingco.ci</Text>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Newsletter</ListHeader>
            <Flex>
              <Input
                size="lg"
                borderRightRadius={0}
                type="email"
                variant="filled"
                placeholder="Adresse mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                size="lg"
                fontWeight="normal"
                borderLeftRadius={0}
                colorScheme="green"
                onClick={subscribeToNewsletter}
              >
                S'abonner
              </Button>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>© 2022 Hr Consulting & Co. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
