/**
 * Strictly follow chakra-ui's recommendation on how to organize customized theme
 * for your project. https://chakra-ui.com/docs/theming/customize-theme#scaling-out-your-project
 */
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  xs: '17.5em',
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
})

export default extendTheme({
  breakpoints,
})
