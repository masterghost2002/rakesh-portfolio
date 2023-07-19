import React from 'react';
import { chakra } from '@chakra-ui/react';
import NavHeader from './NavHeader';
import { Outlet } from 'react-router-dom';
import FloatingContactModal from './FloatingContactModal';
import Footer from './Footer';
const Main = chakra('main', {
  baseStyle: {
    width: '100%',
    paddingTop: '10vh'
  },
});
export default function RootLayout() {
  return (
    <>
      <NavHeader />
      <Main paddingX={{ base: '2%', md: '20%' }}>
          <Outlet />
      </Main>
      {/* <SendMessageButton /> */}
      <FloatingContactModal/>
      <Footer />
    </>
  )
}
