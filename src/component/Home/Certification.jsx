import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import { wrapperPadding } from "../../lib/theme";
import CertificationCard from "../Cards/CertificationCard";
import CertificateData from "./CertificateData";
export default function Certification() {
    return (
        <Box p={wrapperPadding}>
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

        </Box>
    )
}
