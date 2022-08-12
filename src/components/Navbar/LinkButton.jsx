import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function LinkButton({ title, href, ...otherProps }) {
  return (
    <Box
      position="relative"
      as="button"
      mx="25px"
      lineHeight="1.2"
      py={1}
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      fontSize="18px"
      fontWeight="semibold"
      color="#4b4f56"
      _hover={{
        color: 'green.400',
        _after: {
          width: '100%',
          left: 0
        }
      }}
      _after={{
        content: `''`,
        width: 0,
        height: '2px',
        background: 'green.400',
        position: 'absolute',
        borderRadius: '2px',
        left: '50%',
        bottom: 0,
        transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)'
      }}
      {...otherProps}
    >
      <NextLink href={href}>{title}</NextLink>
    </Box>
  );
}
