import React from 'react';
import { Box, Text, Avatar, useColorModeValue, Button, Link, VStack } from '@chakra-ui/react';
import WrapperBox from '../WrapperBox';
import Typewriter from 'typewriter-effect';
import AvatarProfile from '../../assets/profile_avatar.webp';
const Logo = () => {
    return (
        <Text fontSize={{ base: '1.2em', md: '1.5em' }} fontWeight={700}>👋 I, Rakesh Dhariwal</Text>
    )
};
const Profession = () => {
    return (
        <Box color={'purple.500'} fontWeight={500}>
            <Typewriter
                options={{
                    strings: ['Software Engineer', 'Web Developer'],
                    autoStart: true,
                    loop: true,
                    delay: 40,
                }}
            />
        </Box>

    )
}
export default function Header() {
    return (
        <WrapperBox display={'flex'} alignItems={'center'} justifyContent={'space-between'} borderRadius={'12px'} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} px={{ base: '10px', md: '20px' }}>
            <VStack width={'100%'} alignItems={'flex-start'} spacing={2}>
                <Logo />
                <Profession />
                <Button aria-label='CV Downlod button' as={Link} isExternal={true} href='https://drive.google.com/file/d/1Yybef8qNHN-6PmbGopaB6L3hTzA47v05/view?usp=share_link' >View CV</Button>
            </VStack>
            <Avatar size={'xl'} src={AvatarProfile} alt='Dan Abramov' />
        </WrapperBox>
    )
}