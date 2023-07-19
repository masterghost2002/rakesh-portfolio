import Paragraph from '../Paragraph';
import { Box, Heading, useColorModeValue, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import WrapperBox from '../WrapperBox';
const CustomLink = ({ name, to }) => {
    return (
        <Link textDecoration={'underline'}
            as={RouterLink}
            color={useColorModeValue('blackAlpha.700', 'whiteAlpha.600')}
            textUnderlineOffset={6}
            textDecorationThickness={2}
            textDecorationColor={'purple.400'}
            _hover={
                {
                    color:useColorModeValue('black', 'white')
                }
            }
            to={to}
        >
            {name}
        </Link>
    )
}
export default function About() {
    return (
        <WrapperBox>
             <Heading variant={'title'}>
                About
            </Heading>
            <Paragraph className='animate__animated animate__fadeIn' fontWeight={500} color={useColorModeValue('blackAlpha.700', 'whiteAlpha.600')}>
                I am an undergraduate student in computer science at Gurugram University.
                I have experience solving complex problems and working on many projects in full-stack development. Currently,
                I am exploring the DevOps field and enhancing my skills.
            </Paragraph>
            <Box marginTop={2} fontWeight={500} display={{base:'flex',md:'none'}} gap={2}>
                <CustomLink name={'Skills'} to={'Skills'}/>
                <CustomLink name={'Projects'} to={'Projects'}/>
            </Box>
        </WrapperBox>
    )
}
