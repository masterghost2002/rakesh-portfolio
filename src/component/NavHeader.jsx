import React from 'react'
import { chakra, useDisclosure, useColorModeValue, Box , Link} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import ThemeToogler from './ThemeToogler';
import LinkList from './LinkList';
import { BiMenuAltRight } from 'react-icons/bi';
import SideNavigation from './SideNavigation';
const Header = chakra('header', {
    baseStyle: {
        width: '100%',
        position: 'fixed',
        top: '0px',
        height: '10vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backdropFilter: 'blur(10px)',
        zIndex: 2,
    },
});
const LogoLink = ()=>{
    return (
        <Link as={RouterLink} to={'/'} fontSize={'1.5em'} fontWeight={700} _hover={{textDecoration:'none'}}>
            Rakesh Dhariwal
        </Link>
    )
}
export default function NavHeader() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()
    return (
        <Header padding={{ base: '0% 2%', md: '0% 20%' }} bg={useColorModeValue('#ffffff40', '#20202380')}>
            <LogoLink/>
            <Box display={{base:'none',md:'block'}}>
                <LinkList />
            </Box>
            <Box display={'flex'} alignItems={'center'} gap={2}>
                <ThemeToogler />
                <Box display={{ md: 'none' }}>
                    <SideNavigation 
                        children={<LinkList />} 
                        icon={<BiMenuAltRight />}
                        btnRef = {btnRef}
                        isOpen={isOpen}
                        onOpen = {onOpen}
                        onClose = {onClose} 
                    />
                </Box>
            </Box>
        </Header>
    )
}
