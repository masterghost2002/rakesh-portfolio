import { Box, Heading } from "@chakra-ui/react"
import WrapperBox from '../WrapperBox';
import SubSkillsContainer from "./SubSkillsContainer";
import { Cloud, DevTools } from "./SkillsData";
export default function DevopsAndCloud() {
    return (
        <WrapperBox>
            <Heading variant={'title'}>DevOps And Cloud</Heading>
            <SubSkillsContainer subHeading={'Cloud Services'} subSkills={Cloud} />
            <SubSkillsContainer subHeading={'Tools'} subSkills={DevTools} />
        </WrapperBox>
    )
}