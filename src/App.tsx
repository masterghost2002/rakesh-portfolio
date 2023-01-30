import { useEffect } from "react";
import Navbar from "./Components/NavBar/Navbar";
import { Box , Container, useColorMode} from "@chakra-ui/react";
import NavRouter from "./Components/NavRoutes/NavRouter";
import Footer from "./Components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import purple_bg from './Components/assests/purple_bg.svg';
function App() {
  const {colorMode} = useColorMode();
  useEffect(()=>{
    AOS.init({
      offset:200,
      duration: 900,
      easing: 'ease-in-out-quart'
    });
  })
  return (
    <>
    <Container minWidth='100%'  
      p={0} 
      backgroundImage={purple_bg} 
      backgroundColor={colorMode==='light'?'white':'black'}
      id="bg_container"
      >
      <Navbar/>
      <Box px={[5, 5, 10, 20]}>
        <NavRouter/>
        <Footer/>
    </Box>
    </Container>
    </>
  );
}

export default App;
