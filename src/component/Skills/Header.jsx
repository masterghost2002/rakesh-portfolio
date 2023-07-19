import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { wrapperPadding } from '../../lib/theme';
import Paragraph from '../Paragraph';
export default function Header() {
  return (
    <Box p={wrapperPadding}>
      <Heading variant={'title'}>
        Journey
      </Heading>
      <Paragraph className='animate__animated animate__fadeIn' fontWeight={500} color={useColorModeValue('blackAlpha.700', 'whiteAlpha.600')}>
        During my journey as a learner I have came across problems and have skilled my self for solving those better, here are few skills I have learned.
      </Paragraph>
    </Box>
  )
}
