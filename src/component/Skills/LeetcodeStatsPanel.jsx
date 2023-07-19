import { Box,useColorModeValue, Spinner, Text, Divider, Center} from "@chakra-ui/react";
import WrapperBox from '../WrapperBox';
import useFetchLeetcodedata from "../../lib/useFetchLeetcodedata";
export default function LeetcodeStatsPanel() {
    const stats = useFetchLeetcodedata();
    return (
        <WrapperBox
            display={'flex'}
            justifyContent={'space-between'}
            flexDirection={'column'}
            borderRadius={'12px'}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            px={{ base: '10px', md: '20px' }}
            marginY={2}
        >
            <Box display={'flex'} 
                alignItems={'center'} 
                justifyContent={'space-between'} 
                fontSize={{base:'.8em', md:'1em'}}
                fontWeight={500}
            >
                <Text >Overview Of Leetcode stats</Text>
                <Text>Ranking: {stats?.ranking}</Text>
            </Box>
            <Divider my={2} />
            {
                stats === null ? <Spinner /> :
                    <Box px={5} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={{ xsm: 'column', sm: 'row' }} position={'relative'}>
                        <Box 
                            fontSize={'1.2em'} 
                            maxH={'60px'} 
                            display={'flex'} 
                            flexDir={'column'}
                            justifyContent={'center'}
                            overflow={'hidden'}
                            translateY={-10}
                        >
                            <Text opacity={.4}>
                                {stats.totalSolved-1}
                            </Text>
                            <Text fontWeight={700}>
                                {stats.totalSolved} 
                                    <span style={{color:'gray'}}>|</span> 
                                {stats.totalQuestions}
                            </Text>
                            <Text opacity={.4}>
                                {stats.totalSolved+1}
                            </Text>
                           
                        </Box>
                        <Center height='60px' p={2}>
                            <Divider orientation='vertical' />
                        </Center>
                        <Box >
                            <Text color={'green.400'}>Easy: {stats.easySolved}</Text>
                            <Text color={'orange.400'}>Medium: {stats.mediumSolved}</Text>
                            <Text color={'red.400'}>Hard: {stats.hardSolved}</Text>
                        </Box>
                    </Box>
            }
        </WrapperBox>
    )
}
