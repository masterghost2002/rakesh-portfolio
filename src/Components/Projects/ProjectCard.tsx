
import { Card, Image, Stack, CardBody, Heading, CardFooter, Button, Text, Flex, Link, Box, Divider, HStack, useColorMode } from "@chakra-ui/react";
import ReadMoreModal from './ReadMoreModal';
type keyable = {
    [key: string]: any
}
export default function ProjectCard(props: keyable) {
    const {colorMode} = useColorMode();
    return (
        <Card
            direction={{ base: 'column', sm: 'column', md:'column', lg:'row' }}
            overflow='hidden'
            variant='outline'
            border={'none'} 
            backgroundColor={'transparent'} 
            boxShadow={'none'} py={10}
        >
            <HStack px={2}>
            <Link isExternal href={props.buttonLinks[0].linkUrl} >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '100%', md: '100%', lg: '600px' }}
                    src={props.projectImage}
                    alt='Caffe Latte'
                    borderRadius='md'
                    shadow='sm'
                />
            </Link>
            </HStack>
            <Stack >
                <CardBody px={2}  >
                    <HStack>
                        <Heading textAlign={'start'} size='md'>{props.projectName}</Heading>
                        {props.projectTypeIcon}
                    </HStack>
                <Box>
                    <Text py='2' textAlign={'start'} fontWeight='bold' >
                        Tech Used: {props.techUsed}
                    </Text>
                    <Text fontFamily={`'Montserrat', sans-serif`}  color={colorMode==='light'?'gray.600':'gray.200'} py='2' textAlign={'start'} >
                        {props.projectDescription.slice(0, 400)}
                    </Text>
                    
                </Box>
                </CardBody>
                <Divider/>
                <CardFooter>
                    <Flex justifyContent={'space-between'}  gap={['5', '5']} flexWrap='wrap'>
                        {
                            props.buttonLinks.map((link:keyable, index:number)=>
                                <Button 
                                    textDecoration='none' 
                                    as={Link} key = {index} 
                                    colorScheme='purple'  
                                    href={link.linkUrl} 
                                    isExternal>
                                        {link.buttonName}
                                    </Button>
                            )
                        }
                        {
                        props.projectDescription.length>500 && 
                        <ReadMoreModal 
                            projectName = {props.projectName}
                            projectDescription = {props.projectDescription}
                            techUsed = {props.techUsed}
                            projectTypeIcon = {props.projectTypeIcon}
                        />
                        }
                    </Flex>
                </CardFooter>
            </Stack>
        </Card>
    )
}
