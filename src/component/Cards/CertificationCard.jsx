import { Box, Text, Image, Button, Link, useColorModeValue } from "@chakra-ui/react";
import {FiExternalLink} from 'react-icons/fi';
const CardHeader = ({organisation, organisationLogo, certificateName}) => {
    return (
        <Box display={'flex'} gap={'10px'} marginTop={2} alignItems={'center'} >
            <Image src={organisationLogo} alt='Dan Abramov' boxSize='50px' objectFit='cover' />
            <Box flex={{ base: '8', md: '9' }}>
                <Text fontWeight={600} >{certificateName}</Text>
                <Text color={useColorModeValue('blackAlpha.700', 'whiteAlpha.600')}>{organisation}</Text>
            </Box>
        </Box>
    )
};
const CardBody = ({issuedData, credentialLink}) => {
    return (
        <Box marginLeft={'60px'}>
            <Text color={useColorModeValue('blackAlpha.700', 'whiteAlpha.600')}>Issued {issuedData}</Text>
            <Button isExternal={true} href={credentialLink} rightIcon={<FiExternalLink/>} marginY={1} variant={'link'} borderRadius={'12px'} as={Link}>Show credential</Button>
        </Box>
    )
};
const Skills = ({ name }) => {
    return (
        <Box className="floating" display={'flex'} padding={1} alignItems={'center'} justifyContent={'center'} bg={'purple.400'} borderRadius={'16px'} fontSize={{base:'10px', md:'12px'}}>
            {name}
        </Box>
    )
}
const CardFooter = ({skills}) => {
    return (
        <Box  marginLeft={'60px'} display={'flex'} flexWrap={'wrap'} p={2} gap={2}>
            {
                skills.map((skill, index)=><Skills key={`${skill}+${index}`} name={skill}/>)
            }
        </Box>
    )
}
export default function CertificationCard({certificate}) {
    return (
        <Box >
            <CardHeader certificateName={certificate.certificateName} organisation={certificate.organisation} organisationLogo={certificate.organisationLogo}/>
            <CardBody issuedData={certificate.issuedData} credentialLink={certificate.credentialLink}/>
            <CardFooter  skills={certificate.skills} />
        </Box>
    )
};
export {Skills};
