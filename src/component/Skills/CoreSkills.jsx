import { Heading, Box } from "@chakra-ui/react";
import WrapperBox from '../WrapperBox';
import { coreSkills } from "./SkillsData";
import { Skills } from "../Cards/CertificationCard";
export default function CoreSkills() {
    return (
        <WrapperBox >
            <Heading variant={'title'}>Core Skills</Heading>
            <Box display={'flex'} flexWrap={'wrap'} py={2} gap={2} >
                {
                    coreSkills.map((skill, index) => <Skills key={`${skill}+${index}`} name={skill} />)
                }
            </Box>
        </WrapperBox>
    )
}
