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
    FormControl,
    FormLabel,
    Textarea
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FiMail } from 'react-icons/fi';
import { FaLocationArrow } from 'react-icons/fa';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { CustomToast } from "../lib/CustomToast";
import emailjs from 'emailjs-com';
const validateForm = (data) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (data.name.trim() === "") {
        return (
            {
                isError: true,
                errorInfo: { title: "Name", message: "Please enter a name", status: "error" }
            }
        );
    }
    if (data.message.trim() === '') {
        return (
            {
                isError: true,
                errorInfo: { title: "Message", message: "Message must not be empty", status: "error" }
            }
        )
    }
    if (!data.email.match(validRegex)) {
        return (
            {
                isError: true,
                errorInfo: { title: "Email", message: "Enter a valid email address", status: "error" }
            }
        )
    }
    return { isError: false };
}
const ContactForm = () => {
    const {addToast} = CustomToast();
    const handleForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formObject = Object.fromEntries(formData.entries());
        const result = validateForm(formObject);
        if (result.isError === true) {
            addToast(result.errorInfo);
        }
        else {
            const serviceId = import.meta.env.VITE_APP_SERVICE_ID ? import.meta.env.VITE_APP_SERVICE_ID : "";
            const templateId = import.meta.env.VITE_APP_TEMPLATE_ID? import.meta.env.VITE_APP_TEMPLATE_ID : "";
            const password = import.meta.env.VITE_APP_PASSWORD ? import.meta.env.VITE_APP_PASSWORD : "";
            emailjs.sendForm(serviceId, templateId, e.currentTarget, password)
                .then(() => {
                    addToast({ title: "Mail Sent", message: "Will reach you soon :)", status: "success" });
                    e.currentTarget.reset();
                }, (err) => {
                    console.log(err)
                    addToast({ title: "Mail Sent Failed :(", message: "Server Error", status: "error" });
                });
        }
    }
    return <form style={{ gap: '20px', display: 'flex', flexDirection: 'column' }} onSubmit={handleForm}>
        <Input placeholder="Full Name" name="name" variant={'filled'} bg={useColorModeValue('whiteAlpha.600', 'black.600')} />
        <InputGroup>
            <InputLeftElement pointerEvents='none'>
                <FiMail />
            </InputLeftElement>
            <Input name="email" type='tel' placeholder='Email Address' isRequired bg={useColorModeValue('whiteAlpha.600', 'black.600')} />
        </InputGroup>
        <FormControl mb={4} isRequired>
            <FormLabel fontWeight={'bold'}>Message</FormLabel>
            <Textarea placeholder='type...' name='message' size='md' bg={useColorModeValue('whiteAlpha.600', 'black.600')}></Textarea>
        </FormControl>
        <button id="formsubmit-button" style={{ display: 'hidden' }} type="submit" aria-label="form-submit-btn" />
    </form>
}

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
    }, []);
    return (
        <>
            <Box position={'fixed'} bottom={'20px'} right={'20px'} onClick={onOpen} >
                <Button
                    aria-label="write-a-message-btn"
                    leftIcon={<BiMessageSquareDetail />}
                    colorScheme='purple'
                    variant='solid'
                    className="message-button"
                >
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
                    <ModalBody>
                        <Box my={6} color={useColorModeValue('blackAlpha.700', 'whiteAlpha.600')} >
                            <Text fontWeight={500} >
                                I’d love to hear from you! Please fill out the form below and I’ll get back to you as soon as possible. or
                                Don’t hesitate to reach out if you have any questions or just want to say hello!
                            </Text>
                        </Box>
                        {<ContactForm />}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={() => {
                            document.getElementById('formsubmit-button').click();
                        }} colorScheme="purple" rightIcon={<FaLocationArrow />} aria-label="form-submit-btn-activator">Send</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}