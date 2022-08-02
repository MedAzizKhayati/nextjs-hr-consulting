import {
  Box,
  Image,
  Flex,
  Avatar,
  Button,
  useDisclosure,
  Collapse,
  Stack,
  IconButton,
  Center
} from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';
import NextLink from 'next/link';
import LINKS from './links';
import LinkButton from './LinkButton';
import Fade from 'react-reveal/Fade';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Fade top style="position: sticky">
      <Box mb={125}>
        <Flex h={125} px={50} align="center" justifyContent="space-between">
          <Flex
            boxSize={{ base: '75px', md: '125px' }}
            objectFit="cover"
            alignItems="center"
          >
            <NextLink href="/">
              <Image
                transition="all 0.25s ease-in-out"
                _hover={{ cursor: 'pointer', transform: 'scale(1.05)' }}
                src="/logo.png"
                alt="Hr Consulting Logo"
              />
            </NextLink>
          </Flex>
          <Flex
            justifyContent="flex-end"
            align="center"
            display={{ base: 'none', xl: 'flex' }}
          >
            {LINKS.map((link) => (
              <LinkButton title={link.name} href={link.href} key={link.name} />
            ))}

            <Button
              colorScheme="green"
              borderRadius={30}
              mr={20}
              ml={15}
              _hover={{
                transform: 'scale(1.05)',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'
              }}
            >
              Deposer un CV
            </Button>

            <Box>
              <Avatar
                bg="none"
                color="green.600"
                transition="all 0.3s ease"
                p={1}
                _hover={{
                  transform: 'scale(1.5)',
                  cursor: 'pointer',
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
                }}
                icon={<AiOutlineUser fontSize="3rem" />}
              />
            </Box>
          </Flex>

          <Flex display={{ base: 'flex', xl: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              aria-label={'Toggle Navigation'}
              colorScheme="green"
            />
          </Flex>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </Fade>
  );
}

const MobileNav = () => {
  return (
    <Stack
      p={4}
      borderBottom="1px"
      borderColor="rgba(0,0,0,0.3)"
      pb={10}
      mb={5}
      display={{ xl: 'none', base: 'flex' }}
      boxShadow="lg"
    >
      {LINKS.map((navItem) => (
        <MobileNavItem key={navItem.name} {...navItem} />
      ))}
      <Center>
        <Button
          colorScheme="green"
          borderRadius={30}
          _hover={{
            transform: 'scale(1.02)',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'
          }}
        >
          Deposer un CV
        </Button>
      </Center>
    </Stack>
  );
};

const MobileNavItem = ({ name, href }) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        href={href ?? '#'}
        justify={'center'}
        align={'center'}
        _hover={{
          textDecoration: 'none'
        }}
      >
        <LinkButton title={name} href={href} key={name} />
      </Flex>
    </Stack>
  );
};
