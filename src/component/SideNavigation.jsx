import React from "react";
import { IconButton, Drawer, DrawerBody, DrawerOverlay, useColorModeValue, DrawerContent, useDisclosure, DrawerCloseButton, DrawerHeader } from "@chakra-ui/react";
export default function SideNavigation({ children, icon }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef()
  return (
    <>
      <IconButton aria-label="side-menu-btn" ref={btnRef} icon={icon} colorScheme='purple' onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={useColorModeValue('#f0e7db', '#202023')}>
          <DrawerCloseButton />
          <DrawerHeader>Navigate</DrawerHeader>
          <DrawerBody >
            {children}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}