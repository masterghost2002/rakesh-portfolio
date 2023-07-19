import {Heading, List, ListItem, ListIcon, Link, useColorModeValue } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import {BiLogoGmail} from 'react-icons/bi'
import WrapperBox from "../WrapperBox";
const CustomListItemLink = ({name, to, icon}) => {
    return (
        <ListItem >
            <Link
                color={useColorModeValue('blackAlpha.700', 'whiteAlpha.600')}
                isExternal={true}
                display={'flex'}
                alignItems={'center'}
                href={to}
                width={'auto'}
                _hover={{
                    transition:'.25s ease-in',
                    textDecoration: 'underline',
                    textUnderlineOffset: 6,
                    textDecorationThickness: 2,
                    textDecorationColor: 'purple.400',
                    color:useColorModeValue('black', 'white')
                }}
                fontWeight={'500'}
                
            >
                <ListIcon as={icon} />
                {name}
            </Link>
        </ListItem>
    )
}
const ContactList = () => {
    return (
        <List spacing={3} paddingLeft={10}>
            <CustomListItemLink name={'Linked In'} to={'https://linkedin.com/in/rakeshdhariwal61'} icon={FaLinkedinIn} />
            <CustomListItemLink name={'Git-Hub'} to={'https://github.com/masterghost2002'} icon={FaGithub} />
            <CustomListItemLink name={'Gmail'} to={'mailto: rakeshdhariwal61@gmail.com'} icon={BiLogoGmail} />
        </List>
    )
}
export default function Connect() {
    return (
        <WrapperBox>
            <Heading variant={'title'} >
                Connect
            </Heading>
            <ContactList />
        </WrapperBox>
    )
}
