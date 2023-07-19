import { Box, Heading, UnorderedList, ListItem, Text, useColorModeValue } from "@chakra-ui/react";
import { wrapperPadding } from "../../lib/theme";
const CustomListItem = ({ date, institute, score, field }) => {
    return (
        <ListItem>
            <Box>
                <Box display={'flex'} gap={2}>
                    <Text fontWeight={'500'}>{date}</Text>
                    <Text fontWeight={'500'} color={useColorModeValue('blackAlpha.700', 'whiteAlpha.600')}>{institute}</Text>
                </Box>
                <Box color={useColorModeValue('blackAlpha.700', 'whiteAlpha.600')}>
                    <Text >{field}</Text>
                    <Text>Percentage: {score}</Text>
                </Box>
            </Box>

        </ListItem>
    )
}
const EducationList = () => {
    return (
        <UnorderedList paddingLeft={10} marginTop={5}>
            <CustomListItem
                date={'2020-2024'}
                institute={'Gurugram University'}
                score={'80%'}
                field={'B.Tech CS AI'}
            />
            <CustomListItem
                date={'2019-2020'}
                institute={'RPS Dharuhera'}
                score={'90%'}
                field={'Grade 12'}
            />
            <CustomListItem
                date={'2017-2018'}
                institute={'SDCS Tauru'}
                score={'84%'}
                field={'Grade 10'}
            />
        </UnorderedList>
    )
}
export default function Education() {
    return (
        <Box p={wrapperPadding}>
            <Heading variant={'title'} >
                Education
            </Heading>
            <EducationList />
        </Box>
    )
}
