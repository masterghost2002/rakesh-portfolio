import {List,ListItem, Link} from '@chakra-ui/react';
import {BiLogoLinkedin, BiLogoGithub} from 'react-icons/bi';
import { NavLink as RouterLink } from 'react-router-dom';
const StyledListItemLink = ({value, to, onClose})=>{
    return (
    <ListItem onClick={()=>onClose()}>
        <Link
            as={RouterLink}
            _hover={{textDecoration:'none', fontWeight:'500'}}
            fontWeight={400}
            fontSize={'1.1em'}
            to={to}
            _activeLink={{color:'purple.400'}}
            
        >
            {value}
        </Link>
    </ListItem>   
    )
}
export default function LinkList({onClose}) {
  return (
    <List 
        display={'flex'} 
        flexDirection={{base:'column',md:'row'}} 
        alignItems={'center'} 
        justifyContent={{base:'space-evenly',md:'space-between'}} 
        gap={{base:0, md:3}} 
        height={{base:'100%', md:'auto'}}
    >
        <StyledListItemLink to={'/skills'} value={'Skills'} onClose={onClose}/>
        <StyledListItemLink to={'/projects'} value={'Projects'} onClose={onClose} />
        <StyledListItemLink to={'https://linkedin.com/in/rakeshdhariwal61'} value={<BiLogoLinkedin/>} onClose={onClose}/>
        <StyledListItemLink to={'https://github.com/masterghost2002'}  value={<BiLogoGithub/>} onClose={onClose}/>
    </List>
  )
};
