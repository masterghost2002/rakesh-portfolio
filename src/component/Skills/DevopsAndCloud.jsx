import { Box, Heading } from "@chakra-ui/react"
import { wrapperPadding } from "../../lib/theme";
import SubSkillsContainer from "./SubSkillsContainer";
import { Cloud, DevTools } from "./SkillsData";
export default function DevopsAndCloud() {
    return (
        <Box p={wrapperPadding}>
            <Heading variant={'title'}>DevOps And Cloud</Heading>
            <SubSkillsContainer subHeading={'Cloud Services'} subSkills={Cloud} />
            <SubSkillsContainer subHeading={'Cloud Services'} subSkills={DevTools} />
        </Box>
    )
}