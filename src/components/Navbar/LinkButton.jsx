import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function LinkButton({ title, href }) {
  return (
    <Box
      position="relative"
      as="button"
      mx="35px"
      height="24px"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      fontSize="18px"
      fontWeight="semibold"
      color="#4b4f56"
      _hover={{
        color: 'green.400',
        _after: {
          width: '100%'
        }
      }}
      _after={{
        content: `''`,
        width: 0,
        height: '2px',
        background: 'green.400',
        position: 'absolute',
        borderRadius: '2px',
        left: 0,
        bottom: 0,
        boxShadow: 'dark-lg',
        transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)'
      }}
    >
      <NextLink href={href}>
        {title}
      </NextLink>
    </Box>
  );
}
