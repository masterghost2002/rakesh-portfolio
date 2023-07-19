import { Box, Heading, useColorModeValue, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { wrapperPadding } from "../../lib/theme";
import Paragraph from "../Paragraph";
const LeetcodePanel = () => {
  const [stats, setStats] = useState(null);
  useEffect(() => {

    const handleStatsLocally = ()=>{
      const statsFromStorage = localStorage.getItem('stats');
      if(!statsFromStorage) return;
      setStats(JSON.parse(statsFromStorage));
    }
    const fetchStats = async () => {
      const data = await axios.get('https://leetcode-stats-api.herokuapp.com/rakeshdhariwal61')
        .then((res) => res.data).catch((err) => err);
      const statsData = {
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
      }
      localStorage.setItem('stats', JSON.stringify(statsData));
      setStats(statsData);
    }
    handleStatsLocally();
    fetchStats();
  }, []);
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} borderRadius={'12px'} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} px={{ base: '10px', md: '20px' }} p={wrapperPadding} marginY={2}>
      {
        stats === null ? <Spinner /> :
          <Box p={5} fontSize={'1.2em'}>
            {stats.totalSolved} / {stats.totalQuestions}
          </Box>
      }

    </Box>
  )
}
export default function CodingProfile() {
  return (
    <Box p={wrapperPadding}>
      <Heading variant={'title'}>Coding Profile</Heading>
      <Paragraph className='animate__animated animate__fadeIn' fontWeight={500} color={useColorModeValue('blackAlpha.700', 'whiteAlpha.600')}>
        From the beginning of my coding journey, I start learning Data Structures and Algorithms, as they known to be building blocks of a software porducts.
        A optimized algorithm increase the efficiency of a software porduct and decrease its deployment cost.During the whole journey I solved more than 800+ problems, nearly 600+ on Leetcode.
      </Paragraph>
      <LeetcodePanel />
    </Box>
  )
}