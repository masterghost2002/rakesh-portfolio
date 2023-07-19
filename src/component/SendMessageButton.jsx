import { Box, Button } from "@chakra-ui/react";
import {BiMessageSquareDetail} from 'react-icons/bi';
import { useEffect } from "react";
export default function SendMessageButton() {
    useEffect(()=>{
        const buttonTxt = document.getElementById('btn-text');
        if(buttonTxt === undefined) return;
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100 && buttonTxt.style.maxWidth === '')
                buttonTxt.style.maxWidth = '200px';
            else if(window.scrollY < 100 && buttonTxt.style.maxWidth === '200px') buttonTxt.style.maxWidth = '';
        });
    }, [])
    return (
        <Box position={'fixed'} bottom={'20px'} right={'20px'} >
            <Button aria-label="write-a-message-btn" leftIcon={<BiMessageSquareDetail />} colorScheme='purple' variant='solid' className="message-button">
                <span id="btn-text" className="message-button-text" >
                    Write a message
                </span>
            </Button>
        </Box>
    )
}
