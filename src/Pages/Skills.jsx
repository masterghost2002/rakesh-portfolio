
import WrapperContainer from '../component/WrapperContainer';
import Header from '../component/Skills/Header';
import CoreSkills from '../component/Skills/CoreSkills';
import WebDevelopment from '../component/Skills/WebDevelopment';
import DevopsAndCloud from '../component/Skills/DevopsAndCloud';
import CodingProfile from '../component/Skills/CodingProfile';
export default function Skills() {
  return (
    <WrapperContainer>
      <Header/>
      <CoreSkills/>
      <WebDevelopment/>
      <DevopsAndCloud/>
      <CodingProfile/>
    </WrapperContainer>
  )
}
