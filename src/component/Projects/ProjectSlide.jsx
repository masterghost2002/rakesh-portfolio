import { Card, Image, CardBody, Heading, Text, CardFooter, Button } from "@chakra-ui/react";

export default function ProjectSlide({ projectData, id, HandleViewFullDetails, isFullScreen }) {
    return (
        <Card
            direction={{ base: 'column', sm: 'column' }}
            overflow={!isFullScreen ? 'hidden' : 'auto'}
            variant='outline'
            border={'none'}
            id={id}
            backgroundColor={'inherit'}
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: 'auto' }}
                src={projectData.projectImageDark}
                alt='Caffe Latte'
            />

            <CardBody
                maxH={isFullScreen ? { base: 'auto' } : { base: '150', md: '120' }}
                minH={isFullScreen?'100%':'auto'}
                overflow={!isFullScreen && 'hidden'}
                mb={2}

            >
                <Heading size='md' fontSize={{ base: '16px', md: '18px' }}>{projectData.projectName}</Heading>
                <Text py='2' fontSize={'14px'}>
                    {projectData.projectDescription}
                </Text>
            </CardBody>
            <CardFooter
                p={0}
                display={'flex'}
                justifyContent={'flex-end'}

            >
                <Button
                    onClick={HandleViewFullDetails}
                    variant={'ghost'} >{!isFullScreen ? 'View Full Details' : 'Exit Full Screen'}
                </Button>
            </CardFooter>
        </Card>
    )
}