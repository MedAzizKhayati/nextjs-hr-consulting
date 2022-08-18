import { HStack, Image, Text, VStack } from '@chakra-ui/react';

export default function SmallNewsCard({ news, ...otherProps }) {
  return (
    <HStack spacing={10} {...otherProps}>
      <Image
        width={150}
        height={100}
        objectFit="cover"
        borderRadius="lg"
        src={
          news.image ||
          'https://picsum.photos/1920/' + Math.floor(Math.random() * 50 + 1080)
        }
        alt={news.imageAlt || 'news'}
      />
      <VStack maxW={240} alignItems="flex-start">
        <Text color="teal.400">{news.date.toLocaleDateString()}</Text>
        <Text fontSize="sm">{news.description}</Text>
      </VStack>
    </HStack>
  );
}
