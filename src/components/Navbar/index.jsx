import {
  Box,
  Image,
  Flex,
  Avatar,
  Button,
  useDisclosure,
  Collapse,
  Stack,
  Link,
  Text,
  IconButton
} from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';
import LINKS from './links';
import LinkButton from './LinkButton';
import Fade from 'react-reveal/Fade';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Fade top>
      <Box mb={125} pos="relative">
        <Flex h={150} px={50} align="center" justifyContent="space-between">
          <Box>
            <Image src="/logo.png" alt="Hr Consulting Logo" />
          </Box>
          <Flex
            justifyContent="flex-end"
            align="center"
            display={{ base: 'none', lg: 'flex' }}
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

          <Flex display={{ base: 'flex', lg: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
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
      // mx="10%"
      display={{ lg: 'none', base: 'block' }}
      boxShadow="lg"
    >
      {LINKS.map((navItem) => (
        <MobileNavItem key={navItem.name} {...navItem} />
      ))}
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
