import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import WrapperBox from '../WrapperBox';
import Paragraph from '../Paragraph';
export default function Header() {
  return (
    <WrapperBox >
      <Heading variant={'title'} mt={0}>
        Journey
      </Heading>
      <Paragraph className='animate__animated animate__fadeIn' fontWeight={500} color={useColorModeValue('blackAlpha.700', 'whiteAlpha.600')}>
      Throughout my learning journey, I have encountered various challenges and actively honed my problem-solving skills to overcome them. Here are some of the skills I have acquired and improved upon:
      </Paragraph>
    </WrapperBox>
  )
}
