import { useRouteError } from "react-router-dom";
import { Container, Text, Heading } from "@chakra-ui/react";
import Paragraph from "../component/Paragraph";
export default function RouteError() {
    const error = useRouteError();
    return (
        <Container maxW={'xxl'} height={'100dvh'} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
        <Heading>Opps!</Heading>
        <Paragraph>Sorry, an unexpected error has occurred.</Paragraph>
        <Text>{error.statusText || error.message}</Text>
    </Container>
    );
}
