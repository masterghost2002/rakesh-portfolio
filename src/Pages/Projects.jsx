import React from 'react';
import WrapperContainer from '../component/WrapperContainer'; 
import Header from '../component/Projects/Header';
import WebDevProjects from '../component/Projects/WebDevProjects';
export default function Projects() {
  return (
    <WrapperContainer>
      <Header/>
      <WebDevProjects/>
    </WrapperContainer>
  )
}
