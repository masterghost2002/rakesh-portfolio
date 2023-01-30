import { useColorMode, Link} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
var links_info = [{link_name:'Home', to:'/'}, {link_name:'Skills', to:'/skills'}, {link_name:'Projects', to:'/projects'}, {link_name:'Contact Me', to:'/contact-me'}];
type link_style = {
    _non_active_link:{
        color:string
    },
    _active_link:{
        borderBottom:string,
        borderColor:string,
        color:string
    },
    _hover:{
        color:string
    }
}
function returnStyle(colorMode: string):link_style{
    const activeColor = colorMode === 'light'?'black':'white';
    const non_active_color = colorMode === 'light'?'gray.600':'gray.300';
    const hover_color = colorMode === 'light'?'black':'white';
   const style:link_style = {
        _non_active_link:{color:non_active_color},
        _active_link:{borderBottom:'3px solid', borderColor:'purple.400', color:activeColor},
        _hover:{color:hover_color}
    };
    return style;
}
type keyable = {
    [key:string]:any
}
export default function Links(props:keyable) {
    const {colorMode} = useColorMode();
    const style:link_style = returnStyle(colorMode);
  return (
    <>
        {links_info.map((item, index)=>
            <Link 
            key ={index}
            as={NavLink}
            onClick={props.scroll_to_top}
            to={item.to} 
            fontWeight={'bold'}
            color = {style._non_active_link.color}
            _activeLink={style._active_link}
            _hover = {style._hover}
            >
                {item.link_name}
            </Link>
        )}
    </>
  )
}
Links.propTypes = {
    scroll_to_top: PropTypes.func,
};
