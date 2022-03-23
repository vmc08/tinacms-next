import { ComponentStyleConfig } from '@chakra-ui/react'

const Menu: ComponentStyleConfig = {
  // The parts of the component
  parts: ['menu', 'item'],
  // The base styles for each part
  baseStyle: {},
  // The size styles for each part
  sizes: {
    sm: {
      item: {
        fontSize: '0.875rem',
        px: 3,
        py: 2,
      },
    },
  },
  // The variant styles for each part
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
}

export default Menu
