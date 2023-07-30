import {Heading, useColorModeValue } from '@chakra-ui/react';
import WrapperBox from '../WrapperBox';
import Paragraph from '../Paragraph';
export default function Header() {
  return (
    <WrapperBox >
      <Heading variant={'title'} mt={0}>
        Journey
      </Heading>
      <Paragraph className='animate__animated animate__fadeIn' fontWeight={500} color={useColorModeValue('blackAlpha.700', 'whiteAlpha.600')}>
      During my journey as a learner, I have encountered numerous problems and obstacles, which have provided valuable opportunities to develop and refine my problem-solving skills. 
      I have actively focused on engaging in real-life projects, 
      as I believe they offer the most effective means of expanding my knowledge and expertise. 
      By immersing myself in these practical endeavors, 
      I have gained hands-on experience and a deeper understanding of various concepts in my field of study. 
      These experiences have been instrumental in shaping my growth as a computer science undergraduate, 
      and I am committed to continuing my pursuit of knowledge and skills in order to become a proficient professional in the future.
      </Paragraph>
    </WrapperBox>
  )
}
