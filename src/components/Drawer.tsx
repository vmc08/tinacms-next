import { FC, RefObject } from 'react'
import {
  Drawer as ChakraDrawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  UseDisclosureReturn,
} from '@chakra-ui/react'

interface DrawerProps {
  disclosure: UseDisclosureReturn
  buttonRef: RefObject<HTMLButtonElement>
  header: JSX.Element
  footer?: JSX.Element
}

const Drawer: FC<DrawerProps> = ({ disclosure, buttonRef, header, footer, children }) => (
  <ChakraDrawer
    size="full"
    isOpen={disclosure.isOpen}
    placement="right"
    onClose={disclosure.onToggle}
    finalFocusRef={buttonRef}
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader p={4}>{header}</DrawerHeader>
      <DrawerBody>{children}</DrawerBody>
      {footer && <DrawerFooter d="block">{footer}</DrawerFooter>}
    </DrawerContent>
  </ChakraDrawer>
)

export default Drawer
