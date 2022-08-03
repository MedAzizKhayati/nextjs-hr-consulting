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
import { Fade as Hamburger } from 'hamburger-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [shouldEnableBlur, toggleBlur] = useState(false);

  const blurStyle = {
    bg: 'rgba(50,50,50,0.1)',
    backdropFilter: 'auto',
    backdropBlur: '18px',
    boxShadow: 'lg'
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 5) {
        toggleBlur(true);
      } else {
        toggleBlur(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      toggleBlur(true);
    } else {
      toggleBlur(false);
    }
  }, [isOpen]);

  return (
    <Box
      transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
      pos="sticky"
      top={0}
      zIndex={3}
      {...(shouldEnableBlur && blurStyle)}
    >
      <Fade top>
        <Box mb={125}>
          <Flex h={85} px={50} align="center" justifyContent="space-between">
            <Flex
              boxSize={{ base: '75px', md: '85px' }}
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
                <LinkButton
                  title={link.name}
                  href={link.href}
                  key={link.name}
                />
              ))}
              <NextLink href="/send-resume">
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
              </NextLink>
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
                icon={<Hamburger />}
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
    </Box>
  );
}

const MobileNav = () => {
  return (
    <Stack p={4} pb={10} display={{ xl: 'none', base: 'flex' }}>
      {LINKS.map((navItem) => (
        <MobileNavItem key={navItem.name} {...navItem} />
      ))}
      <Center>
        <NextLink href="/send-resume">
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
        </NextLink>
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
