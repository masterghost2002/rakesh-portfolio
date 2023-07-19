import { Container, Box, Text, Spinner } from "@chakra-ui/react";
export default function Splash() {
  return (
    <Container maxW={'xxl'} height={'100dvh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Box display={'flex'} flexDirection={'column'} gap={10} alignItems={'center'}>
            <Text 
                className="animate__animated animate__zoomIn"
                fontSize={'1.5em'} 
                fontWeight={500} 
                color = 'purple.400'
            >
                Setting up the environment
            </Text>
            <Spinner 
                className="animate__animated animate__zoomIn"
                size={'xl'} 
                speed="1s" 
                color="purple.400" 
                thickness="5px"
            />
        </Box>
    </Container>
  )
}
