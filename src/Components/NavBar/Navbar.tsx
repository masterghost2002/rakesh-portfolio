import { useState } from "react";
import {chakra, Box} from "@chakra-ui/react";
import TopNavBar from "./TopNavBar";
import SideNav from "./SideNav";
export default function Navbar() { 
    const scroll_to_top = ():void=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
     }
    const [stickyNav, setStickyNav] = useState(false);
    const [showSideNav, setShowSideNav] = useState(false);
    window.onscroll = function () {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        var progress_bar = document.getElementById("progress_bar");
        if(progress_bar)
            progress_bar.style.width = scrolled + "%"

        const header = document.getElementById('header');
        if ( header && window.pageYOffset > 0 && stickyNav === false)
            setStickyNav(true);
        if ( header && window.pageYOffset <=0 && stickyNav === true)
            setStickyNav(false);
        if ( header && window.pageYOffset >= header.offsetHeight && showSideNav === false)
            setShowSideNav(true);
        if (header && window.pageYOffset <= header.offsetHeight && showSideNav === true)
            setShowSideNav(false);
      }
    return (
        <>
        <chakra.header id="header"  
            width={'100%'} 
            zIndex={200} 
            top='0px' 
            transition={'2s linear'}
            position={stickyNav?'sticky':'static'}
            fontFamily={`'Montserrat', sans-serif`}
            >
            <TopNavBar 
                stickyNav = {stickyNav} 
                scroll_to_top={scroll_to_top}
            />
             <Box id="progress_bar" backgroundColor={'purple.400'} height={1} width={0}>
            </Box>
        </chakra.header>
        <SideNav
            showSideNav = {showSideNav}
            scroll_to_top={scroll_to_top}
        >
        </SideNav>
        </>

    )
}
