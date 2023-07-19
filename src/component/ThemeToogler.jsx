import React from 'react';
import { FaRegMoon, FaSun } from 'react-icons/fa';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
export default function ThemeToogler() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <IconButton
            as={motion.button}
            key={useColorModeValue('light', 'dark')}
            initial={{y:-20,opacity: 0 }}
            animate={{y:0,opacity: 1 }}
            exit= {{y:20,opacity: 0 }}
            aria-label='theme-toggler-button'
            icon={colorMode === 'light' ? <FaRegMoon /> : <FaSun />}
            onClick={toggleColorMode}
            background={useColorModeValue('purple.300', 'yellow.400')}
            border={'none'}
            borderRadius={'50%'}
            _hover={{ background: useColorModeValue('purple.500', 'yellow.500')}}
        />
    )
};