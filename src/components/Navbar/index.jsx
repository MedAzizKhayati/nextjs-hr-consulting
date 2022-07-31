import { Box, Image, Flex, Avatar, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';
import LINKS from './links';
import LinkButton from './LinkButton';
import Fade from 'react-reveal/Fade';

export default function Navbar() {
  return (
    <Fade top>
      <Flex
        mb={175}
        h={120}
        px={50}
        align="center"
        justifyContent="space-between"
      >
        <Box>
          <Image src="/logo.png" alt="Hr Consulting Logo" />
        </Box>
        <Flex
          justifyContent="flex-end"
          align="center"
          display={{ md: 'none', lg: 'flex' }}
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
      </Flex>
    </Fade>
  );
}
