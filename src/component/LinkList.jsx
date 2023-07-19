import {List,ListItem, Link} from '@chakra-ui/react';
import {BiLogoLinkedin, BiLogoGithub} from 'react-icons/bi';
import { Link as RouterLink } from 'react-router-dom';
const StyledListItemLink = ({value, to})=>{
    return (
    <ListItem>
        <Link
            as={RouterLink}
            _hover={{textDecoration:'none', fontWeight:'500'}}
            fontWeight={400}
            fontSize={'1.1em'}
            to={to}
        >
            {value}
        </Link>
    </ListItem>   
    )
}
export default function LinkList() {
  return (
    <List 
        display={'flex'} 
        flexDirection={{base:'column',md:'row'}} 
        alignItems={'center'} 
        justifyContent={{base:'space-evenly',md:'space-between'}} 
        gap={{base:0, md:3}} 
        height={{base:'100%', md:'auto'}}
    >
        <StyledListItemLink to={'/skills'} value={'Skills'}/>
        <StyledListItemLink to={'/projects'} value={'Projects'} />
        <StyledListItemLink to={'https://linkedin.com/in/rakeshdhariwal61'} value={<BiLogoLinkedin/>}/>
        <StyledListItemLink to={'https://github.com/masterghost2002'}  value={<BiLogoGithub/>}/>
    </List>
  )
};
