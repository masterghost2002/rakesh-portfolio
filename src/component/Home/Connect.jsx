import {Heading} from "@chakra-ui/react";
import WrapperBox from "../WrapperBox";
import CustomIconLinks from "../CustomIconLinks";
import { SocialLinks } from "./HomeData";
export default function Connect() {
    return (
        <WrapperBox>
            <Heading variant={'title'} >
                Connect
            </Heading>
            <CustomIconLinks linksData={SocialLinks}/>
        </WrapperBox>
    )
}
