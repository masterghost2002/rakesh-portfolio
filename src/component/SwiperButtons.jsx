import { Box, IconButton } from "@chakra-ui/react";
import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
const SwiperButtons = ({swiperRef})=>{
    return <Box display={'flex'} width={'100%'} alignItems={'center'} justifyContent={'flex-end'} gap={2} py={2} >
        <IconButton aria-label="previous-slide-btn" icon={<GrFormPrevious/>} borderRadius={'50%'} onClick={()=>swiperRef.current.slidePrev()}/>
        <IconButton aria-label="next-slide-btn" icon={<GrFormNext/>} borderRadius={'50%'} onClick={()=>swiperRef.current.slideNext()}/>
    </Box>
}
export default SwiperButtons;