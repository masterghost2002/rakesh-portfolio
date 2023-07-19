import { chakra, Box, Text} from "@chakra-ui/react";
import { wrapperPadding } from "../lib/theme";
const FooterContainer = chakra('footer', {
    baseStyle:{
        width:'100%'
    }
});
export default function Footer() {
  return (
    <FooterContainer height={{base:'15vh', md:'10vh'}}>
        <Box p={wrapperPadding} display={'flex'}  width={'100%'} justifyContent={'center'}>
            <Text color={'gray.500'} fontSize={'14px'} textAlign={'center'}>Rakesh Dhariwal @ 2023 - All rights reserved.</Text>
        </Box>
    </FooterContainer>
  )
}
