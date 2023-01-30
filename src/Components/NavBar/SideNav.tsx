import { HStack, useColorMode, VStack, Text, Link ,Box, Divider} from "@chakra-ui/react";
import { AiOutlineProject } from 'react-icons/ai';
import { FcHome, FcContacts } from 'react-icons/fc';
import { GiSkills } from 'react-icons/gi';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import 'animate.css';
type keyable = {
    [key: string]: any
}
type link_style = {
    _non_active_link: {
        color: string
    },
    _active_link: {
        borderBottom: string,
        borderColor: string,
        color: string
    },
    _hover: {
        color: string
    }
}
function returnStyle(colorMode: string): link_style {
    const non_active_color = colorMode === 'light' ? 'gray.600' : 'gray.300';
    const hover_color = colorMode === 'light' ? 'black' : 'white';
    const style: link_style = {
        _non_active_link: { color: non_active_color },
        _active_link: { borderBottom: '2px solid', borderColor: 'purple.400', color:colorMode === 'light'?'black':'white'},
        _hover: { color: hover_color }
    };
    return style;
}
export default function SideNav(props: keyable) {
    const { colorMode } = useColorMode();
    const style: link_style = returnStyle(colorMode);
    return (
        <Box
            className="animate__animated animate__slideInUp"
            id="bottom_nav"
            position={'fixed'}
            bottom={0}
            minWidth={'100%'}
            bg={colorMode==="light"?'white':'black'}
            fontFamily={`'Montserrat', sans-serif`}
            fontWeight={'bold'}
            // className='blur_effect'
            zIndex={5}
            display={[`${props.showSideNav ? 'block' : 'none'}`, `${props.showSideNav ? 'block' : 'none'}`, 'none']}
        >
            <Divider/>
            <HStack
            px={1}
            height={'60px'}
            justifyContent={'space-evenly'}
            alignItems={'center'}
            overflow={'hidden'}
        >
            <Link
                as={NavLink}
                to='/'
                color={style._non_active_link.color}
                _activeLink={style._active_link}
                _hover={style._hover}
                onClick={props.scroll_to_top}
            >
                <VStack>
                    <FcHome />
                    <Text>Home</Text>
                </VStack>
            </Link>

            <Link
                as={NavLink}
                to='/skills'
                color={style._non_active_link.color}
                _activeLink={style._active_link}
                _hover={style._hover}
                onClick={props.scroll_to_top}
            >

                <VStack>
                    <GiSkills />
                    <Text>Skills</Text>
                </VStack>
            </Link>

            <Link
                as={NavLink}
                to='/projects'
                color={style._non_active_link.color}
                _activeLink={style._active_link}
                _hover={style._hover}
                onClick={props.scroll_to_top}
            >

                <VStack>
                    <AiOutlineProject />
                    <Text>Projects</Text>
                </VStack>
            </Link>

            <Link
               as={NavLink}
               to='/contact-me'
                color={style._non_active_link.color}
                _activeLink={style._active_link}
                _hover={style._hover}
                onClick={props.scroll_to_top}
            >
                <VStack>
                    <FcContacts />
                    <Text>Contact</Text>
                </VStack>
            </Link>
        </HStack>
        </Box>
        
    )
};

SideNav.propTypes = {
    scroll_to_top: PropTypes.func,
}
