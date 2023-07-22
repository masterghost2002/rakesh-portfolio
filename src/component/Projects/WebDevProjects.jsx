import WrapperBox from "../WrapperBox";
import { Heading } from "@chakra-ui/react";
import SwiperContainer from '../SwiperContainer';
import ProjectSlide from "./ProjectSlide";
import { WebDevProjectsData } from './ProjectsData';
import { useEffect, useState } from "react";
export default function WebDevProjects() {
    const [isFullScreen, setIsFullScreen] = useState(false);
    function goFullScreen() {
        var elem = document.getElementById('full_screen_box');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    }
    function exitFullScreen(){

        if(document.exitFullscreen){
            document.exitFullscreen();
        }
        else if(document.mozCancelFullScreen){
            document.mozCancelFullScreen();
        }
        else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen();
        }
        else if(document.msExitFullscreen){
            document.msExitFullscreen();
        }

    }
    const HandleViewFullDetails = (slideId) => {
        if (!isFullScreen) {
            goFullScreen(slideId);
            setIsFullScreen(true);
        }
        else if (isFullScreen)
            exitFullScreen();
    }
    const handleIsFullScreen = () => {
        if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement)
            setIsFullScreen(false);
    };
    useEffect(() => {
        if (document.addEventListener) {
            document.addEventListener('fullscreenchange', handleIsFullScreen, false);
            document.addEventListener('mozfullscreenchange', handleIsFullScreen, false);
            document.addEventListener('MSFullscreenChange', handleIsFullScreen, false);
            document.addEventListener('webkitfullscreenchange', handleIsFullScreen, false);
        }
        return (
            () => {
                if (document.removeEventListener) {
                    document.removeEventListener('fullscreenchange', handleIsFullScreen, false);
                    document.removeEventListener('mozfullscreenchange', handleIsFullScreen, false);
                    document.removeEventListener('MSFullscreenChange', handleIsFullScreen, false);
                    document.removeEventListener('webkitfullscreenchange', handleIsFullScreen, false);
                }
            }
        )
    }, [])
    return (
        <WrapperBox>
            <Heading variant={'title'}>Web Deveopment</Heading>
            <SwiperContainer isFullScreen={isFullScreen}>
                {
                    WebDevProjectsData.map((project, index) => {
                        return (
                            <ProjectSlide
                                key={index}
                                projectData={project}
                                id={`project_card_${index}`}
                                HandleViewFullDetails={HandleViewFullDetails}
                                isFullScreen={isFullScreen}
                            />
                        )
                    })
                }
            </SwiperContainer>
        </WrapperBox>
    )
}