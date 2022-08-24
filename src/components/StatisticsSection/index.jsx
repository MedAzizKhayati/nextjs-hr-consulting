import { Flex, Heading, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import Zoom from 'react-reveal/Zoom';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import STATISTICS_DATA from '@data/statistics';
import { FiUsers } from 'react-icons/fi';
import { BsBank } from 'react-icons/bs';
import { GiTeacher } from 'react-icons/gi';

const icons = [FiUsers, BsBank, GiTeacher];

export default function StatisticsSection() {
  return (
    <Flex mb={40} alignItems="center" flexDir="column">
      <Zoom>
        <Flex mb={20} alignItems="center" flexDir="column">
          <Heading color="blue.900" size="3xl" textAlign="center">
            HR CONSULTING & CO
          </Heading>
          <Heading color="green.400">En quelques chiffres</Heading>
        </Flex>
      </Zoom>

      <SimpleGrid columns={[1, 1, 1, 3]} spacing={10} px={10}>
        {STATISTICS_DATA.map((statistic, index) => (
          <VisibilitySensor key={index} partialVisibility>
            {({ isVisible }) => (
              <Zoom delay={index * 150}>
                <Flex
                  p={20}
                  flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                  bg="green.600"
                  borderRadius="3xl"
                  boxShadow="dark-lg"
                  h={350}
                  maxW={450}
                >
                  <Icon as={icons[index % icons.length]} color="blue.900" w={70} h={70}  />
                  <Heading fontSize="5xl" color="blue.900">
                    {isVisible ? (
                      <CountUp
                        end={statistic.numbers}
                        duration={1 + Math.random() * 2}
                      />
                    ) : (
                      0
                    )}
                  </Heading>
                  <Text textAlign="center" fontSize="lg" color="white">
                    {statistic.description}
                  </Text>
                </Flex>
              </Zoom>
            )}
          </VisibilitySensor>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
