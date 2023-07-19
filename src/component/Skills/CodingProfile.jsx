import { Box, Heading, useColorModeValue, Spinner, Text, Divider, Center } from "@chakra-ui/react";
import WrapperBox from '../WrapperBox';
import LeetcodeStatsPanel from "./LeetcodeStatsPanel";
import Paragraph from "../Paragraph";
export default function CodingProfile() {
  return (
    <WrapperBox>
      <Heading variant={'title'}>Coding Profile</Heading>
      <Paragraph className='animate__animated animate__fadeIn' fontWeight={500} color={useColorModeValue('blackAlpha.700', 'whiteAlpha.600')}>
        From the beginning of my coding journey, I start learning Data Structures and Algorithms, as they known to be building blocks of a software porducts.
        A optimized algorithm increase the efficiency of a software porduct and decrease its deployment cost.During the whole journey I solved more than 800+ problems, nearly 600+ on Leetcode.
      </Paragraph>
      <LeetcodeStatsPanel />
    </WrapperBox>
  )
}