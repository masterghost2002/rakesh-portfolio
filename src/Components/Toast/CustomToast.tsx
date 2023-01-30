import { useToast } from '@chakra-ui/react';
type keyable = {
    [key:string]:string
    status: "info"|"warning"|"success"|"error"|"loading"
}
export const CustomToast = () => {
    const toast = useToast();
    const addToast = (newRes:keyable) => {
        toast({
            title: newRes.title,
            description:newRes.message, 
            status: newRes.status, 
            position:"top-right", 
            isClosable: true, 
            duration: 5000,
        })
    }
    
    return { addToast };
}