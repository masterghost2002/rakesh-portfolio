import { extendTheme } from '@chakra-ui/react';
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  fonts:{
    body: `'Poppins', sans-serif`,
  },
  config
})

export default theme;