import { defineStyleConfig, extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  }

const theme = extendTheme(
    {
        styles: {
            global: (props) => ({
                body: {
                    bg: mode('#f0e7db', '#202023')(props),
                },
                fontFamily: "`M PLUS Rounded 1c`"
            }),
        },
        config,
        fonts: {
            body: `'M PLUS Rounded 1c'`
        },
        components: {
            Heading: {
                variants: {
                    'title': {
                        textDecoration: 'underline',
                        textUnderlineOffset: 6,
                        textDecorationThickness: 2,
                        fontSize: '1.2em',
                        textDecorationColor: 'purple.400',
                        marginTop: 3,
                        marginBottom: 2
                    },
                    'sub-heading': {
                        textDecoration: 'underline',
                        textUnderlineOffset: 6,
                        textDecorationThickness: 2,
                        fontSize: '1em',
                        textDecorationColor: 'gray.500',
                        marginTop: 3,
                        marginBottom: 2,
                        
                    }
                }
            }
        }
    }
);
const wrapperPadding = {
    base: '10px 10px',
    md: '10px 20px'
};
export { wrapperPadding };
export default theme;