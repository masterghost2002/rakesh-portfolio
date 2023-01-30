import { IconButton, Link } from "@chakra-ui/react"
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'
export default function ContactMenu() {
    return (
        <>
            <IconButton
                as = {Link}
                href="https://www.instagram.com/masterghost__"
                isExternal
                aria-label="instagram"
                borderRadius='full'
                _hover={{transition: '.4s', transform: 'scale(1.05)' }}
            >
                <FaInstagram size='20px'/>
            </IconButton>
            <IconButton
                as = {Link}
                href = "https://linkedin.com/in/rakeshdhariwal61/"
                isExternal
                aria-label="linkedin"
                borderRadius='full'
                _hover={{transition: '.4s', transform: 'scale(1.05)' }}
            >
                <FaLinkedinIn size='20px' />
            </IconButton>
            <IconButton
                as = {Link}
                href = "https://github.com/masterghost2002/"
                isExternal
                aria-label="github"
                borderRadius='full'
                _hover={{transition: '.4s', transform: 'scale(1.05)' }}
            >
                <FaGithub size='20px' />
            </IconButton>
            <IconButton
                as = {Link}
                href = "mailto:rakeshdhariwal61@gmail.com"
                isExternal
                aria-label="github"
                borderRadius='full'
                _hover={{transition: '.4s', transform: 'scale(1.05)' }}
            >
                <SiGmail size='20px'  />
            </IconButton>
        </>

    )
}
