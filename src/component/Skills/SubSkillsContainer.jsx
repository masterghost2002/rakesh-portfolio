import { Box, Heading } from "@chakra-ui/react";
import { Skills } from "../Cards/CertificationCard";
export default function SubSkillsContainer({ subHeading, subSkills }) {
    if (!subSkills || subSkills.length == 0) return;
    return (
        <Box marginLeft='20px'>
            <Heading variant={'sub-heading'}>{subHeading}</Heading>
            <Box display={'flex'} alignItems={'center'} flexWrap={'wrap'} gap={'2'} py={2} >
                {
                    subSkills.map((skill, index) => <Skills key={`${skill}+${index}`} name={skill} />)
                }
            </Box>
        </Box>

    )
}
