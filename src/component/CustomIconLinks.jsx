import { ListItem, List, ListIcon, Link, useColorModeValue } from "@chakra-ui/react"
const CustomListItemLink = ({ name, to, icon }) => {
    return (
        <ListItem >
            <Link
                color={useColorModeValue('blackAlpha.700', 'whiteAlpha.600')}
                isExternal={true}
                display={'flex'}
                alignItems={'center'}
                href={to}
                width={'auto'}
                _hover={{
                    transition: '.25s ease-in',
                    textDecoration: 'underline',
                    textUnderlineOffset: 6,
                    textDecorationThickness: 2,
                    textDecorationColor: 'purple.400',
                    color: useColorModeValue('black', 'white')
                }}
                fontWeight={'500'}

            >
                <ListIcon as={icon} />
                {name}
            </Link>
        </ListItem>
    )
}
export default function CustomIconLinks({linksData}) {
    return (
        <List spacing={3} paddingLeft={10} pt={2}>
            {
                linksData.map((link, index)=>
                    <CustomListItemLink key={index} name={link.name} to={link.to} icon={link.icon}/>
                )
            }
        </List>
    )
}