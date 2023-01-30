import { Flex,VStack, HStack, Text, Heading, useColorMode, Button, Link } from "@chakra-ui/react"
import ContactMenu from "./ContactMenu";
import Typewriter from 'typewriter-effect';
import {HiDocumentDownload} from 'react-icons/hi';
import 'animate.css';
export default function LeftHome() {
    const { colorMode } = useColorMode();
    return (
        <Flex height={'100%'} justifyContent={'space-between'} className="animate__animated animate__fadeInLeft" >
            <HStack spacing={[5, 10]} >
                <VStack width={'100px'} 
                    borderRadius={12} 
                    backgroundColor={colorMode==='light'?'gray.200':'blackAlpha.500'} 
                    spacing={5} py={5} 
                    px={2} 
                    className="blur_effect"
                    id="contact_menu"
                >
                   <ContactMenu/>
                </VStack>
                <VStack align={'self-start'}>
                    <HStack>
                    <Heading  >Hi</Heading>
                    <Heading color={'purple.400'}>I,</Heading>
                    </HStack>
                        <Heading >
                            Rakesh Dhariwal
                        </Heading>
                    {/* <Text fontWeight={'bold'}>Software Engineer, Web Developer</Text> */}
                    <Text color={'purple.400'} fontWeight={'bold'}><Typewriter
                                options={{
                                    strings: ['Software Engineer', 'Web Developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                }}
                            /></Text>

                    <Text  color={colorMode==='light'?'gray.600':'gray.200'} fontFamily={`'Montserrat', sans-serif`}>
                        I am a student & software engineer based in India and I have been building noteworthy websites. I am also good in problem solving solved over 800+ problem over different platform (590+ on Leetcode)
                    </Text>
                    <Text >–Currently exploring DevOps and Web Development.</Text>
                    <Link 
                        isExternal href='https://drive.google.com/file/d/1Yybef8qNHN-6PmbGopaB6L3hTzA47v05/view?usp=share_link'
                        textDecoration={'none'}
                        >
                        <Button rightIcon={<HiDocumentDownload/>}>Download CV  </Button>
                    </Link>
                </VStack>
            </HStack>
        </Flex>
    )
}
