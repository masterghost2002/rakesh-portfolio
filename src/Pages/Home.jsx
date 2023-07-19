// import { Container } from "@chakra-ui/react";
import WrapperContainer from "../component/WrapperContainer";
import Header from "../component/Home/Header";
import About from "../component/Home/About";
import Education from "../component/Home/Education";
import Connect from "../component/Home/Connect";
import Certification from "../component/Home/Certification";
export default function Home() {
  return (
    <WrapperContainer>
      <Header />
      <About />
      <Education />
      <Certification/>
      <Connect />
    </WrapperContainer>

  )
}
