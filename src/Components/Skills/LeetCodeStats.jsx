import { useEffect, useState } from "react";
import { Container, Text, HStack, Heading, Progress, Stack, useColorMode, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { AiFillStar } from 'react-icons/ai';
import 'react-circular-progressbar/dist/styles.css';
const ProgressComponent = (props) => <Stack>
  <HStack>
    <Text color={props.colorMode === 'light' ? 'gray.600' : 'gray.300'} fontSize={['12px', '15px']}>{props.type}</Text>
    <HStack>
      <Text fontWeight={600} fontSize={['12px', '15px']}>{props.solved}</Text>
      <Text fontSize={['10px', '12px']}>/{props.total}</Text>
    </HStack>

  </HStack>
  <Progress colorScheme={props.colorScheme} size='sm' value={(props.solved / props.total) * 100} borderRadius={6} />
</Stack>
export default function LeetCodeStats() {
  const [stats, setStats] = useState(null);
  const { colorMode } = useColorMode();
  useEffect(() => {
    const res = async () => {
      const data = await axios.get('https://leetcode-stats-api.herokuapp.com/rakeshdhariwal61')
        .then((res) => res.data).catch((err) => err);
      setStats({
        totalQuestions: data.totalQuestions,
        totalSolved: data.totalSolved,
        totalEasy: data.totalEasy,
        easySolved: data.easySolved,
        totalMedium: data.totalMedium,
        mediumSolved: data.mediumSolved,
        totalHard: data.totalHard,
        hardSolved: data.hardSolved,
        ranking: data.ranking,
        reputation: data.reputation
      })
    }
    res();
  }, [])

  return (
    <Container w='100%' p={2} borderRadius={6}>
      <Heading mb={5}>Leetcode Stats</Heading>
      {stats === null?<HStack width='100%' justifyContent='center'><Spinner size='lg'/></HStack>:<>
        <HStack justifyContent={'space-between'} mb={5}>
          <HStack>
            <Text fontWeight={600} color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>Ranking </Text>
            <Text>{stats.ranking}</Text>
          </HStack>
          <HStack>
            <AiFillStar />
            <Text fw={500}> {stats.reputation}</Text>
          </HStack>
        </HStack>
        <Container display='flex' width='100' alignItems='center' p={2} >
          <Container flex={[4, 2]} p={0} mr={[5, 10]}>
            <CircularProgressbar
              value={stats.totalSolved / stats.totalQuestions}
              maxValue={1}
              text={stats.totalSolved}
              styles={buildStyles({
                textColor: `${colorMode === 'light' ? 'black' : 'white'}`,
                pathColor: `rgba(255, 161, 22, 1)`,
                backgroundColor: 'red',
              })}
            />
          </Container>
          <Container flex={[6, 8]} p={0}>
            <Stack spacing={2}>
              <ProgressComponent colorMode={colorMode} colorScheme='green' type='Easy' solved={stats.easySolved} total={stats.totalEasy} />
              <ProgressComponent colorMode={colorMode} colorScheme='yellow' type='Medium' solved={stats.mediumSolved} total={stats.totalMedium} />
              <ProgressComponent colorMode={colorMode} colorScheme='red' type='Hard' solved={stats.hardSolved} total={stats.totalHard} />
            </Stack>
          </Container>
        </Container>
      </>}
    </Container>
  );
}
