import { Box, HStack, Heading, VStack, Text, useColorMode } from "@chakra-ui/react";
import { SlBadge } from 'react-icons/sl';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProjectCard from "./ProjectCard";
import {projectsData} from './ProjectData'
export default function Projects() {
  const {colorMode} = useColorMode();
  return (
    <Box
      height={['auto', 'auto', 'auto', 'auto']}
      py={5}
      data-aos="zoom-in-up" 
    >
      <Heading >Projects</Heading>
      <VStack
        alignItems={'flex-start'}
        width={'100%'}
        spacing={2}
        p={5}
      >
        <HStack><SlBadge color='#d4af37' /><Text>Major Project</Text></HStack>
        <HStack><SlBadge color='#808080' /><Text>Minor Project</Text></HStack>
      </VStack>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          projectsData.map((project, index)=>
            <SwiperSlide key={index}>
              <ProjectCard
                projectName = {project.projectName}
                projectType = {project.projectType}
                projectImage = {colorMode === 'light'?project.projectImageLight:project.projectImageDark}
                projectDescription = {project.projectDescription}
                buttonLinks = {project.buttonLinks}
                techUsed={project.techUsed}
                projectTypeIcon = {project.projectType === 'Major'?<SlBadge color='#d4af37' />:<SlBadge color='#808080' />}
              />
            </SwiperSlide>
          )
        }
      </Swiper>
    </Box>
  )
}
