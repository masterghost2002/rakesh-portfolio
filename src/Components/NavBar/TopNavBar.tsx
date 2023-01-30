import { Flex,  HStack, IconButton, useColorMode, Link} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Links from "./Links";
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';
type keyable = {
    [key:string]:any
}
export default function TopNavBar(props:keyable) {
    const { colorMode, toggleColorMode } = useColorMode();
    const scroll_to_top:Function = props.scroll_to_top;
    return (
        <Flex
            justifyContent={'space-between'}
            align="center"
            py={2}
            px={[5, 10, 20]}
            boxShadow={props.stickyNav ? 'lg' : 'none'}
            width={'100%'}
            transition='1s linear'
        >
            <Link _hover={{textDecoration: 'none'}} 
                as = {NavLink} to='/'  
                onClick={props.scroll_to_top} 
                fontSize={['18px', '22px', '25px']} 
                color={'purple.400'}
                fontWeight={'600'}
                >Rakesh Dhariwal</Link>
            <HStack as="nav" >
                <HStack display={{ base: "none", md: "flex" }} spacing="5" bg='transparent'>
                    <Links scroll_to_top={scroll_to_top} />
                </HStack>
                <IconButton
                    bg='transparent'
                    icon={colorMode === 'light' ? <MoonIcon color={'purple.900'} /> : <SunIcon color='yellow.300' />}
                    onClick={() => toggleColorMode()}
                    aria-label="themeSwitcher"
                />
            </HStack>
       
        </Flex>
    )
}
TopNavBar.propTypes = {
    scroll_to_top: PropTypes.func,
    stickyNav: PropTypes.bool
};
TopNavBar.defaultProps = {
    stickyNav: false
};