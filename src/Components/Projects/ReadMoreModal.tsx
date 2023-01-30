import { Button, useDisclosure, ModalOverlay, ModalCloseButton, ModalFooter, ModalBody, ModalContent, Modal, Text, HStack, Heading, useColorMode } from "@chakra-ui/react";
type keyable = {
    [key: string]: any
}
export default function ReadMoreModal(props: keyable) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {colorMode} = useColorMode();
    return (
        <>
            <Button onClick={onOpen}>Read More</Button>
            <Modal blockScrollOnMount={false} 
                isOpen={isOpen} onClose={onClose} 
                motionPreset='slideInBottom'
          
                
                >
                <ModalOverlay backdropFilter = 'blur(12px)' />
                <ModalContent  backgroundColor={colorMode==='light'?'white':'gray.900'}>
                        <HStack>
                            <Heading p={5} fontSize='25px'>{props.projectName}</Heading>
                            {props.projectTypeIcon}
                        </HStack>
                        <ModalCloseButton />
                    <ModalBody>
                        <Text fontWeight='bold' mb='1rem'>
                            Tech Used: {props.techUsed}
                        </Text>
                        {props.projectDescription}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='purple' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
