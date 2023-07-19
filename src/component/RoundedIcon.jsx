import { Image } from '@chakra-ui/react'
export default function RoundedIcon({src}) {
  return (
    <Image src={src} boxSize={'50px'} borderRadius={'50%'}/>
  )
}
