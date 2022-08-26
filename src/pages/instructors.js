import { Center, Flex, SimpleGrid } from '@chakra-ui/react';
import CustomHeading from '@components/CustomHeading';
import InstructorCard from '@components/InstructorCard';
import { appoloClient, mapResultsSsr } from '@services/appolo-config';
import { GET_INSTRUCTORS } from '@services/instructors.service';

export default function Instructors({ instructors }) {
  return (
    <Center flexDir="column">
      <CustomHeading title="Nos Formateurs" mb={20} />
      <Flex justifyContent="center" gap={10} flexWrap="wrap" mb={20}>
        {instructors?.map((instructor, index) => (
          <InstructorCard key={index} instructor={instructor} />
        ))}
      </Flex>
    </Center>
  );
}

export const getServerSideProps = async () => {
  const instructors = mapResultsSsr(
    await appoloClient.query({
      query: GET_INSTRUCTORS
    })
  ).map((row) => ({ ...row, fullName: row.title }));

  return {
    props: {
      instructors
    }
  };
};
