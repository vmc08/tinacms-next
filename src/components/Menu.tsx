import { Menu as ChakraMenu, MenuButton, MenuList, MenuItem, Button, Icon } from '@chakra-ui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

import { PagesBlocksNavigationMenuItems } from '../../.tina/__generated__/types'

interface MenuProps {
  label: PagesBlocksNavigationMenuItems['label']
  subMenuItems: PagesBlocksNavigationMenuItems['subMenuItems']
}

const Menu: React.FC<MenuProps> = ({ label, subMenuItems }) => (
  <ChakraMenu size="sm">
    {({ isOpen }) => (
      <>
        <MenuButton isActive={isOpen} variant="ghost" size="sm" as={Button} rightIcon={<Icon as={ChevronDownIcon} />}>
          {label}
        </MenuButton>
        <MenuList>
          {subMenuItems?.map((subMenu, key) => (
            <MenuItem key={key}>{subMenu?.label}</MenuItem>
          ))}
        </MenuList>
      </>
    )}
  </ChakraMenu>
)

export default Menu
