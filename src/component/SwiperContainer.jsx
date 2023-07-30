import { Swiper, SwiperSlide } from 'swiper/react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Autoplay, Navigation } from 'swiper/modules';
import { Box, IconButton, Button, Link, useColorModeValue } from "@chakra-ui/react";
import { useRef, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
const SwiperButtons = ({ swiperRef, links, isFullScreen }) => {
  return <Box
    display={'flex'}
    width={'100%'}
    alignItems={'center'}
    justifyContent={'space-between'}
    gap={2}
    py={2}
    position={'sticky'}
    top={'0px'}
    zIndex={isFullScreen ? 10 : 1}
    backgroundColor={'inherit'}
    px={isFullScreen ? 5 : 0}
  >
    <Box gap={2} display={'flex'}>
      {
        links.map((link) =>
          <Button key={link.linkUrl} isExternal={true} href={link.linkUrl} rightIcon={<FiExternalLink />} marginY={1} variant={'link'} borderRadius={'12px'} as={Link}>{link.buttonName}</Button>
        )
      }
    </Box>
    <Box gap={2} display={'flex'}>
      <IconButton colorScheme='purple' aria-label="previous-slide-btn" icon={<GrFormPrevious />} borderRadius={'50%'} onClick={() => swiperRef.current.slidePrev()} />
      <IconButton colorScheme='purple' aria-label="next-slide-btn" icon={<GrFormNext />} borderRadius={'50%'} onClick={() => swiperRef.current.slideNext()} />
    </Box>
  </Box>
}
export default function App({ children, isFullScreen, HandleViewFullDetails }) {
  const swiperRef = useRef();
  const [links, setLinks] = useState([]);
  return (
    <Box id='full_screen_box'
      backgroundColor={useColorModeValue('#f0e7db', '#202023')}
      overflow={'auto'}
    >
      <SwiperButtons swiperRef={swiperRef} links={links} isFullScreen={isFullScreen} />
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        onSwiper={(swiper) => swiperRef.current = swiper}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => setLinks(children[swiper.realIndex].props.projectData.buttonLinks)}
      >
        {
          children.map((child, index) => {
            return (
              <SwiperSlide key={index}>
                {child}
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <Box
        display={'flex'}
        justifyContent={'flex-end'}
        position={isFullScreen ? 'fixed' : 'static'}
        bottom={'50px'}
        right={'20px'}
        mt={5}
        zIndex={10}
      >
        {
          isFullScreen?
          <IconButton onClick={HandleViewFullDetails} borderRadius={'50%'} aria-label='exit-fullscreen-btn' icon={<AiOutlineClose/>} colorScheme='red'/>:
          <Button aria-label='fullscreen-btn' onClick={HandleViewFullDetails}>Read More</Button>
        }
      </Box>
    </Box>
  );
}
