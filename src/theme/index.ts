/**
 * Strictly follow chakra-ui's recommendation on how to organize customized theme
 * for your project. https://chakra-ui.com/docs/theming/customize-theme#scaling-out-your-project
 */
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import Menu from './components/menu'

const breakpoints = createBreakpoints({
  xs: '21.4375em', // used
  sm: '30em',
  md: '48em', // used
  lg: '60em', // used
  xl: '80em',
})

export default extendTheme({
  styles: {
    global: {
      h1: {
        fontSize: {
          xs: '32px !important',
          lg: '48px !important',
        },
      },
      h2: {
        fontSize: {
          xs: '28px !important',
          lg: '40px !important',
        },
      },
      h3: { fontSize: '32px !important' },
      h4: { fontSize: '28px !important' },
      h5: { fontSize: '24px !important' },
      h6: { fontSize: '18px !important' },
    },
  },
  breakpoints,
  components: {
    Menu,
  },
})
