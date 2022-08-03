import { Box, Center, SimpleGrid } from '@chakra-ui/react';
import CustomHeading from '@components/CustomHeading';
import InstructorCard from '@components/InstructorCard';
import INSTRUCTORS from '@data/instructors';

export default function Instructors() {
  return (
    <Center flexDir="column">
      <CustomHeading title="Nos Formateurs" mb={20} />
      <SimpleGrid columns={[1, 2, 2, 3]} spacing="10">
        {INSTRUCTORS.map((instructor) => (
          <InstructorCard key={instructor.fullName} instructor={instructor} />
        ))}
      </SimpleGrid>
    </Center>
  );
}
