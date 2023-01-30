import {
    Container,
    VStack, FormControl,
    FormLabel, Input,
    InputLeftElement, InputGroup,
    Textarea, SimpleGrid,
    GridItem, Box,
    Text, Button
} from "@chakra-ui/react";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import 'animate.css';
import React from "react";
import { CustomToast } from "../Toast/CustomToast";
import purple_bg from '../assests/purple_bg.svg';
export default function ContactMe() {
    const { addToast } = CustomToast();
    //  
    const formValidate = (e: React.FormEvent<HTMLFormElement>):boolean=>{
        const formData = new FormData(e.currentTarget);
        const formObject = Object.fromEntries(formData.entries());
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let name = String(formObject.fullname);
        let message = String(formObject.message);
        let email = String(formObject.email);
        if(name.trim() === ""){
            addToast({title:"Name is required", message:"Please enter a name", status:"error"});
            return false;
        }
        if(message.trim() === ''){
            addToast({title:"Message is required", message:"Message must not be empty", status:"error"});
            return false
        }
        if(!email.match(validRegex)){
            addToast({title:"Invalid Email", message:"Enter a valid email address", status:"error"});
            return false;
        }
        return true;

    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if(!formValidate(e)) return;
       
        emailjs.sendForm('service_portfolio', 'template_rr2ve1e', e.currentTarget, '2L3iGLFweDHBxyW0w')
            .then(() => {
                addToast({title:"Mail Sent", message:"Will reach you soon :)", status:"success"});
            }, () => {
                addToast({title:"Mail Sent Failed :(", message:"Server Error", status:"error"});
            });
        e.currentTarget.reset();
    }
    return (
        <Container minWidth='100%' py={5} 
        borderRadius={6}
        className="blur_effect"
        my={5}
        >
            <SimpleGrid
                columns={3}
                columnGap={5}
                rowGap={5}
                my={5}
            >
                <GridItem colSpan={[3, 3, 1]}>
                    <Box
                        minHeight={['20vh', '100%']}
                        borderRadius={6}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        backgroundImage = {purple_bg}
                        backgroundSize={'cover'}
                        py={5}
                    >
                        <VStack gap={10}>
                            <Text fontWeight={'bold'}>Write Message/Project Details</Text>
                            <HiOutlineMail fontSize={'60px'} className="animate__animated animate__bounce animate__infinite mail_icon" />
                        </VStack>
                    </Box>

                </GridItem>
                <GridItem colSpan={[3, 3, 2]}>
                    <form onSubmit={handleSubmit} >
                        <FormControl mb={4} isRequired>
                            <FormLabel fontWeight={'bold'}>Full Name</FormLabel>
                            <Input isRequired={true} type='text' name='fullname' placeholder='John Wick' variant='flushed' ></Input>
                        </FormControl>
                        <FormControl mb={4} isRequired>
                            <FormLabel fontWeight={'bold'}>Email Address</FormLabel>
                            <InputGroup >
                                <InputLeftElement children={<HiOutlineMail />} />
                                <Input isRequired={true} type='text' name='email' placeholder='johnwick@mail.com' variant='flushed' ></Input>
                            </InputGroup>
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel fontWeight={'bold'}>Phone</FormLabel>
                            <InputGroup >
                                <InputLeftElement children={<BsFillTelephoneFill />} />
                                <Input  type="text" name="phone" placeholder="123-456-7890"  variant='flushed'></Input>
                            </InputGroup>
                        </FormControl>
                        <FormControl mb={4} isRequired>
                            <FormLabel fontWeight={'bold'}>Message</FormLabel>
                            <Textarea placeholder='type...' name='message' size='md'></Textarea>
                        </FormControl>
                        <VStack width={'100%'}>
                            <Button  alignSelf={'flex-end'} rightIcon={<FaLocationArrow />} colorScheme='purple' size='lg' type="submit">
                                Submit
                            </Button>
                        </VStack>
                    </form>
                </GridItem>

            </SimpleGrid>


        </Container>
    )
}
