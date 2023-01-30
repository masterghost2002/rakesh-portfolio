import { SimpleGrid, GridItem, Box, Heading, Text, VStack, useColorMode, HStack, IconButton, Link, Tooltip } from "@chakra-ui/react";
import LeftSkills from "./LeftSkills";
import RightSkills from "./RightSkills";
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <Box
      py={10}

    >
      <Heading>
        Skills & Certificates
      </Heading>
      <SimpleGrid
        columns={2}
        height={['auto', 'auto', 'auto', '100vh']}
        columnGap={10}
        rowGap={10}
        py={5}
      >
        <GridItem 
          colSpan={[2, 2, 1]} 
          display={'flex'} 
          justifyContent={'center'} 
          alignItems={'center'}
          data-aos="zoom-in-up"
          >
          <VStack 
            spacing={5} 
            backgroundColor={colorMode === 'light' ? 'gray.200' : 'gray.900'} 
            p={5} 
            borderRadius={12} >
            <Text fontFamily={`'Montserrat', sans-serif`}  color={colorMode==='light'?'gray.600':'gray.200'}>
              During my journey as a learner I have came across problems and have skilled my self for solving those better, here are few skills I have learned.
            </Text>
            <LeftSkills />
            <VStack>
              <HStack width='100%' >
                <Text fontWeight='bold'>Coding Profile: </Text>
                <Tooltip hasArrow label='Leetcode' bg='gray.300' color='black'>
                  <IconButton
                    as={Link}
                    href="https://leetcode.com/rakeshdhariwal61/"
                    isExternal
                    aria-label="linkedin"
                    borderRadius='full'
                    _hover={{ transition: '.4s', transform: 'scale(1.05)' }}
                  >
                    <SiLeetcode />
                  </IconButton>
                </Tooltip>
                <Tooltip hasArrow label='Hackerrank' bg='gray.300' color='black'>
                  <IconButton
                    as={Link}
                    href="https://hackerrank.com/rakeshdhariwal61/"
                    isExternal
                    aria-label="linkedin"
                    borderRadius='full'
                    _hover={{ transition: '.4s', transform: 'scale(1.05)' }}
                  >
                    <SiHackerrank />
                  </IconButton>
                </Tooltip>

              </HStack>
              <Text  color={colorMode==='light'?'gray.600':'gray.200'} fontFamily={`'Montserrat', sans-serif`}>
                Problem Solving: Solved over 590+ question on Leetcode, Contest Max Rating: 1499
              </Text>
            </VStack>
          </VStack>
        </GridItem>
        <GridItem colSpan={[2, 2, 1]} data-aos="zoom-in-up" >
          <RightSkills></RightSkills>
        </GridItem>

      </SimpleGrid>
    </Box>

  )
}
