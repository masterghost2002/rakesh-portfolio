import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    Text,
    ModalBody,
    ModalHeader,
    ModalFooter,
    useDisclosure,
    Box,
    useColorModeValue,
    Input,
    InputGroup,
    InputLeftElement,
    VStack,
    FormControl,
    FormLabel,
    Textarea
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FiMail } from 'react-icons/fi';
import {FaLocationArrow} from 'react-icons/fa';
import { BiMessageSquareDetail } from 'react-icons/bi';
export default function FloatingContactModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        const buttonTxt = document.getElementById('btn-text');
        if (buttonTxt === undefined) return;
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100 && buttonTxt.style.maxWidth === '')
                buttonTxt.style.maxWidth = '200px';
            else if (window.scrollY < 100 && buttonTxt.style.maxWidth === '200px') buttonTxt.style.maxWidth = '';
        });
    }, [])
    return (
        <>
            <Box position={'fixed'} bottom={'20px'} right={'20px'} onClick={onOpen} >
                <Button aria-label="write-a-message-btn" leftIcon={<BiMessageSquareDetail />} colorScheme='purple' variant='solid' className="message-button">
                    <span id="btn-text" className="message-button-text" >
                        Write a message
                    </span>
                </Button>
            </Box>
            <Modal
                blockScrollOnMount={true}
                isOpen={isOpen}
                onClose={onClose}
                motionPreset='slideInBottom'
                isCentered
                size={{ base: 'full', md: 'xl' }}
            >
                <ModalOverlay />
                <ModalContent bg={useColorModeValue('#f0e7db', '#202023')}>
                    <ModalHeader>Write a message to me</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody color={useColorModeValue('blackAlpha.700', 'whiteAlpha.600')}>
                        <Box my={6} >
                            <Text fontWeight={500} >
                                I’d love to hear from you! Please fill out the form below and I’ll get back to you as soon as possible. or
                                Don’t hesitate to reach out if you have any questions or just want to say hello!
                            </Text>
                        </Box>

                        <VStack spacing={5}>
                            <Input placeholder="Full Name" variant={'filled'} bg={useColorModeValue('whiteAlpha.600', 'black.600')}/>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <FiMail />
                                </InputLeftElement>
                                <Input type='tel' placeholder='Email Address' isRequired  bg={useColorModeValue('whiteAlpha.600', 'black.600')}/>
                            </InputGroup>
                            <FormControl mb={4} isRequired>
                                <FormLabel fontWeight={'bold'}>Message</FormLabel>
                                <Textarea placeholder='type...' name='message' size='md' bg={useColorModeValue('whiteAlpha.600', 'black.600')}></Textarea>
                            </FormControl>
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button  colorScheme="purple" rightIcon={<FaLocationArrow/>}>Send</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}