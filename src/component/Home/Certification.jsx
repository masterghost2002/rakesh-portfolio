import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import CertificationCard from "../Cards/CertificationCard";
import CertificateData from "./CertificateData";
import WrapperBox from "../WrapperBox";
export default function Certification() {
    return (
        <WrapperBox>
            <Heading variant={'title'} >
                Certification
            </Heading>
            <List paddingLeft={10} marginTop={5} spacing ={5}>
                {
                    CertificateData.map((certificate)=>
                        <ListItem key={certificate.credentialLink}>
                            <CertificationCard
                                certificate={certificate}
                            />
                        </ListItem>
                    
                    )
                }
            </List>
        </WrapperBox>
    )
}
