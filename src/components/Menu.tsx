import {
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
  MenuProps as ChakraMenuProps,
  ButtonProps,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

import { PagesBlocksNavigationMenuItems } from '../../.tina/__generated__/types'

interface MenuProps {
  label: PagesBlocksNavigationMenuItems['label']
  subMenuItems: PagesBlocksNavigationMenuItems['subMenuItems']
  menuSize: ChakraMenuProps['size']
  buttonSize: ButtonProps['size']
}

const Menu: React.FC<MenuProps> = ({ label, subMenuItems, menuSize, buttonSize }) => (
  <ChakraMenu size={menuSize}>
    {({ isOpen }) => (
      <>
        <MenuButton
          isActive={isOpen}
          variant="ghost"
          size={buttonSize}
          as={Button}
          rightIcon={<Icon as={ChevronDownIcon} />}
        >
          {label}
        </MenuButton>
        <MenuList>
          {subMenuItems?.map((subMenu, idx) => (
            <MenuItem key={idx}>{subMenu?.label}</MenuItem>
          ))}
        </MenuList>
      </>
    )}
  </ChakraMenu>
)

export default Menu
