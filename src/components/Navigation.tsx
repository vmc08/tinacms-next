import { useRef } from 'react'
import { Box, Flex, HStack, Icon, IconButton, useDisclosure, VStack, Collapse, ButtonProps } from '@chakra-ui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid'

import Button from '@components/Button'
import Image from '@components/Image'
import Drawer from '@components/Drawer'
import Menu from '@components/Menu'
import { PagesBlocksNavigation } from '../../.tina/__generated__/types'

const LOGO = '/logo.png'
const LOGO_SIZE = 32 || 0

const DesktopNavigation: React.FC<PagesBlocksNavigation> = ({ menuItems, rightMenuItems }) => (
  <Flex justifyContent="space-between" d={{ xs: 'none', xl: 'flex' }}>
    <Flex>
      <Flex mr="8" flexShrink={0}>
        <Image height={LOGO_SIZE} width={LOGO_SIZE} src={LOGO} alt="High Output Ventures" />
      </Flex>
      <HStack spacing="2" height={8}>
        {menuItems?.map((menuItem, idx) => {
          const hasChildren = menuItem?.subMenuItems?.length
          const dynamicKey = `${menuItem?.link}-${idx}`
          return hasChildren ? (
            <Menu
              key={dynamicKey}
              label={menuItem?.label}
              subMenuItems={menuItem.subMenuItems}
              menuSize="sm"
              buttonSize="sm"
            />
          ) : (
            <Button size="sm" variant="ghost" key={dynamicKey}>
              {menuItem?.label}
            </Button>
          )
        })}
      </HStack>
    </Flex>
    <HStack spacing={4}>
      {rightMenuItems?.map((rightMenuItem, idx) => {
        const variant = rightMenuItem?.variant as ButtonProps['variant']
        const isSolid = variant === 'solid'
        return (
          <Button
            key={idx}
            variant={variant}
            size="sm"
            {...(isSolid && {
              colorScheme: 'blue',
            })}
          >
            {rightMenuItem?.label}
          </Button>
        )
      })}
    </HStack>
  </Flex>
)

const MobileNavigation: React.FC<PagesBlocksNavigation> = ({ menuItems, rightMenuItems }) => {
  const disclosure = useDisclosure()
  const collapsibleDisclosure = useDisclosure()
  const buttonRef = useRef<HTMLButtonElement>(null)
  return (
    <>
      <Flex justifyContent="space-between">
        <Flex alignItems="center">
          <Image height={LOGO_SIZE} width={LOGO_SIZE} src={LOGO} alt="High Output Ventures" />
        </Flex>
        <Box>
          <IconButton
            size="sm"
            ref={buttonRef}
            onClick={disclosure.onToggle}
            variant="ghost"
            aria-label="Menu"
            icon={<Icon fontSize="2xl" as={MenuAlt3Icon} />}
          />
        </Box>
      </Flex>
      <Drawer
        disclosure={disclosure}
        buttonRef={buttonRef}
        header={
          <Flex justifyContent="space-between">
            <Flex alignItems="center">
              <Image height={LOGO_SIZE} width={LOGO_SIZE} src={LOGO} alt="High Output Ventures" />
            </Flex>
            <Box>
              <IconButton
                ref={buttonRef}
                onClick={disclosure.onToggle}
                variant="ghost"
                aria-label="Menu"
                icon={<Icon fontSize="2xl" as={XIcon} />}
              />
            </Box>
          </Flex>
        }
      >
        <VStack spacing={4}>
          {menuItems?.map((menuItem, idx) => {
            const hasChildren = menuItem?.subMenuItems?.length
            const dynamicKey = `${menuItem?.link}-${idx}`
            return hasChildren ? (
              <>
                <Button
                  size="sm"
                  variant="ghost"
                  rightIcon={<Icon as={ChevronDownIcon} />}
                  key={dynamicKey}
                  onClick={collapsibleDisclosure.onToggle}
                >
                  {menuItem?.label}
                </Button>
                <Collapse in={collapsibleDisclosure.isOpen} animateOpacity>
                  <VStack spacing={4}>
                    {menuItem?.subMenuItems?.map((subMenu, innerIdx) => (
                      <Button size="sm" variant="ghost" key={`${subMenu?.link}-${innerIdx}`} opacity={0.75}>
                        {subMenu?.label}
                      </Button>
                    ))}
                  </VStack>
                </Collapse>
              </>
            ) : (
              <Button size="sm" variant="ghost" key={dynamicKey}>
                {menuItem?.label}
              </Button>
            )
          })}
          {rightMenuItems?.map((rightMenuItem, idx) => {
            const variant = rightMenuItem?.variant as ButtonProps['variant']
            const isSolid = variant === 'solid'
            return (
              <Button
                key={idx}
                variant={variant}
                size="sm"
                {...(isSolid && {
                  colorScheme: 'blue',
                })}
              >
                {rightMenuItem?.label}
              </Button>
            )
          })}
        </VStack>
      </Drawer>
    </>
  )
}

export default { DesktopNavigation, MobileNavigation }
