import { Box, Heading } from "@chakra-ui/react"
import { wrapperPadding } from "../../lib/theme"
import { BackEndSkills, FrontEndSkills } from "./SkillsData";
import SubSkillsContainer from "./SubSkillsContainer";
export default function WebDevelopment() {
  return (
    <Box p={wrapperPadding}>
      <Heading variant={'title'}>Web Development</Heading>
      <SubSkillsContainer subHeading = {'Front-End'} subSkills={FrontEndSkills}/>
      <SubSkillsContainer subHeading = {'Back-End'} subSkills={BackEndSkills}/>
    </Box>
  )
}
