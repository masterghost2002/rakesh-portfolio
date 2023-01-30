import { Card, Stack, Text, Heading, CardBody, Image, Link, useColorMode } from "@chakra-ui/react";
type keyable = {
  [key: string]: any
}
export default function CertificatesCard(props: keyable) {
  const { colorMode } = useColorMode();
  return (
    <Card maxW='sm' border={'none'} backgroundColor={'transparent'} boxShadow={'none'} py={10}>
      <CardBody border={'none'}>
        <Link isExternal href={props.certificateLink}>
          <Image
            src={props.certificateImage}
            alt='Green double couch with wooden legs'
            borderRadius='sm'
          />
        </Link>
        <Stack mt='5' spacing='3'>
          <Heading size='md' textAlign={'start'}>{props.certificateName}</Heading>
          <Text textAlign={'start'} color={colorMode === 'light' ? 'gray.600' : 'gray.100'} fontFamily={`'Montserrat', sans-serif`}>
            {props.description}
          </Text>
        </Stack>
      </CardBody>
    </Card>

  )
}
