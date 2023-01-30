
import { Flex, IconButton, Tooltip } from '@chakra-ui/react';
import { FaGithub, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiTypescript } from 'react-icons/si';
import { DiJavascript, DiMysql, DiHtml5, DiJava } from 'react-icons/di';
export default function LeftSkills() {
    return (
        <>
            <Flex justifyContent={'space-between'}  gap={['5', '5']} flexWrap='wrap' >
                <Tooltip hasArrow label='Java Script' bg='gray.300' color='black'>
                    <IconButton
                    aria-label = "ff"
                        borderRadius='full'
                        width={['50px', '60px']}
                        height={['50px', '60px']}
                        _hover={{ color: '#E7A41F', transition: '.4s', transform: 'scale(1.1)' }}
                    >
                        <DiJavascript size='30px' />
                    </IconButton>
                </Tooltip>
                <Tooltip hasArrow label='Type Script' bg='gray.300' color='black'>
                    <IconButton
                    aria-label = "ff"
                        borderRadius='full'
                        width={['50px', '60px']}
                        height={['50px', '60px']}
                        _hover={{ color: '#007acc', transition: '.4s', transform: 'scale(1.1)' }}
                    >
                        <SiTypescript size='30px' />
                    </IconButton>
                </Tooltip>
                <Tooltip hasArrow label='Git' bg='gray.300' color='black'>
                    <IconButton
                    aria-label = "ff"
                        borderRadius='full'
                        width={['50px', '60px']}
                        height={['50px', '60px']}
                        _hover={{ transition: '.4s', transform: 'scale(1.1)' }}

                    >
                        <FaGithub size='30px' />
                    </IconButton>
                </Tooltip>
                <Tooltip hasArrow label='Node JS' bg='gray.300' color='black'>

                    <IconButton
                    aria-label = "ff"
                        borderRadius='full'
                        width={['50px', '60px']}
                        height={['50px', '60px']}
                        _hover={{ color: '#215732', transition: '.4s', transform: 'scale(1.1)' }}

                    >
                        <FaNodeJs size='30px' />
                    </IconButton>
                </Tooltip>
                <Tooltip hasArrow label='React' bg='gray.300' color='black'>

                    <IconButton
                    aria-label = "ff"
                        borderRadius='full'
                        width={['50px', '60px']}
                        height={['50px', '60px']}
                        _hover={{ color: '#blue', transition: '.4s', transform: 'scale(1.1)' }}

                    >
                        <FaReact size='30px' />
                    </IconButton>
                </Tooltip>
                <Tooltip hasArrow label='Mongo DB' bg='gray.300' color='black'>

                    <IconButton
                    aria-label = "ff"
                        borderRadius='full'
                        width={['50px', '60px']}
                        height={['50px', '60px']}
                        _hover={{ color: '#589636', transition: '.4s', transform: 'scale(1.1)' }}
                    >
                        <SiMongodb size='30px' />
                    </IconButton>
                </Tooltip>

                <Tooltip hasArrow label='My SQL' bg='gray.300' color='black'>

                    <IconButton
                    aria-label = "ff"
                        borderRadius='full'
                        width={['50px', '60px']}
                        height={['50px', '60px']}
                        _hover={{ transition: '.4s', transform: 'scale(1.1)' }}

                    >
                        <DiMysql size='30px' />
                    </IconButton>
                </Tooltip>

                <Tooltip hasArrow label='HTML 5' bg='gray.300' color='black'>

                    <IconButton
                    aria-label = "ff"
                        borderRadius='full'
                        width={['50px', '60px']}
                        height={['50px', '60px']}
                        _hover={{ color: '#FF8C00', transition: '.4s', transform: 'scale(1.1)' }}

                    >
                        <DiHtml5 size='30px' />
                    </IconButton>
                </Tooltip>

                <Tooltip hasArrow label='Java' bg='gray.300' color='black'>

                    <IconButton
                        aria-label = "ff"
                        borderRadius='full'
                        width={['50px', '60px']}
                        height={['50px', '60px']}
                        _hover={{ color: '#blue', transition: '.4s', transform: 'scale(1.1)' }}

                    >
                        <DiJava size='30px' />
                    </IconButton>
                </Tooltip>

            </Flex >



        </>
    )
}