import { Flex, Image } from "@chakra-ui/react";
import Profile from '../assests/profile_avatar_two.png';
export default function RightHome() {
    return (
        <Flex justifyContent={'center'} alignItems={'center'} height={'100%'}>
            <Image
                // borderRadius='full'
                boxSize={['200px','300','350', '400']}
                src={Profile}
                alt='Dan Abramov'
            />
        </Flex>
    )
}
