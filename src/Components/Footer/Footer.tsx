
import { Box, Divider, Text, IconButton, VStack} from "@chakra-ui/react";
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
export default function Footer() {
  const scroll_to_top = ():void=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
    <Divider/>
    <Box minHeight={['30vh','30vh','30vh','20vh']} width={'100%'} paddingTop={2}>
      <Text >Rakesh Dhariwal @ 2023 - All rights reserved.</Text>
      <VStack >
        <IconButton aria-label="srcoll-top" background={'transparent'} onClick={scroll_to_top}>
          <BsFillArrowUpCircleFill size='40px'/>
        </IconButton>
        <Text fontWeight={'bold'}>Made with ❤️ by Rakesh Dhariwal.</Text>
      </VStack>
    </Box>
    </>
  )
}
