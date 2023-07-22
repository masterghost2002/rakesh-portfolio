import { Card, Image, CardBody, Heading, Text, CardFooter, Box, useColorModeValue } from "@chakra-ui/react";
import { Skills } from "../Cards/CertificationCard";
export default function ProjectSlide({ projectData, id, isFullScreen }) {
    return (
        <Card
            variant='outline'
            border={'none'}
            id={id}
            backgroundColor={'inherit'}
            p={0}
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: 'auto' }}
                src={projectData.projectImageDark}
                alt='Caffe Latte'
            />

            <CardBody
                maxH={isFullScreen ? { base: 'auto' } : { base: '200', md: '120' }}
                overflow={'hidden'}
                pb={2}
            >
                <Heading color={'green.500'} size='md' py={isFullScreen && 2} fontWeight={'600'}>{projectData.projectName}</Heading>
                { isFullScreen && <Box display={'flex'} flexWrap={'wrap'} py={2} gap={2} justifyContent={'space-evenly'}>
                    {
                        projectData.techUsed.map((skill, index) => <Skills key={`${skill}+${index}`} name={skill} />)
                    }
                </Box>}

                <Text py={isFullScreen && 5} fontWeight={500} color={useColorModeValue('blackAlpha.700', 'whiteAlpha.600')}>
                    {projectData.projectDescription}
                </Text>
            </CardBody>
            <CardFooter
                p={0}
                display={'flex'}
                justifyContent={'flex-end'}

            >
            </CardFooter>
        </Card>
    )
}