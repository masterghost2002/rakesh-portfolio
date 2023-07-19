import { motion } from "framer-motion";
import { Container } from "@chakra-ui/react";
export default function WrapperContainer({ children }) {
    return (
        <Container
            as={motion.div}
            variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 }
            }}
            initial='hidden'
            animate='visible'
            transitionDuration={'.15s'}
            maxW={{ base: '100%', md: '80%' }}
            px={0}
            overflowY={'hidden'}
        >
            {children}
        </Container>
    )
}
