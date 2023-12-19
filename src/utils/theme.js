import { extendTheme } from "@chakra-ui/react";
// import '@fontsource/anton';

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        textTransform: 'uppercase',
        fontWeight: 'bold'
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 'none',
        textTransform: 'uppercase',
      },
    },
  },
  styles: {
    global: {
      // styles for the `span`
      span: {
        fontWeight: 'semibold'
      },
    },
  },
  fonts: {
    // heading: `'Anton', sans-serif`,
  },
})

export default theme