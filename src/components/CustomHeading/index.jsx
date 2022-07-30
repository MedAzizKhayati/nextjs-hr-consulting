import { Heading } from "@chakra-ui/react";

export default function CustomHeading({title, lineWidth = 70, ...otherProps}) {
  return (
    <Heading
        color="blue.900"
        size="4xl"
        pos='relative'
        width='max-content'
        py={2}
        _after={{
          content: `''`,
          width: `${lineWidth}%`,
          height: '3px',
          background: 'green.400',
          position: 'absolute',
          borderRadius: '2px',
          right: 0,
          bottom: 0,
          boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.5) 0px 2px 5px',
          transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)'
        }}
        {...otherProps}
      >
        {title}
      </Heading>
  );
}