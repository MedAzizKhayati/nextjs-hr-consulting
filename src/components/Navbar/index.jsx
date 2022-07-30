import { Box, Image, Flex, Avatar, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';
import LINKS from './links';
import LinkButton from './LinkButton';

export default function Navbar() {
  return (
    <Flex mb={175} h={120} px={50} align="center" justifyContent="space-between">
      <Box boxSize={120}>
        <Image src="/logo.png" alt="Hr Consulting Logo" />
      </Box>
      <Flex justifyContent="flex-end" align="center">
        {LINKS.map((link) => (
          <LinkButton title={link.name} href={link.href} key={link.name} />
        ))}

        <Button colorScheme="green" borderRadius={30} mx={20}>
          Deposer un CV
        </Button>

        <Box>
          <Avatar
            bg="none"
            color="green.600"
            icon={<AiOutlineUser fontSize="3rem" />}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
