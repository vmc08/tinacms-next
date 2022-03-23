import { useRef } from 'react'
import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  VStack,
  Collapse,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid'

import Button from '@components/Button'
import Image from '@components/Image'
import Drawer from '@components/Drawer'
import Menu from '@components/Menu'
import { PagesBlocksNavigation } from '../../.tina/__generated__/types'

const LOGO = '/logo.png'

const DesktopNavigation: React.FC<PagesBlocksNavigation> = ({ menuItems }) => {
  const imageHeight = 32 || 0
  return (
    <Flex justifyContent="space-between" d={{ xs: 'none', xl: 'flex' }}>
      <Flex>
        <Flex mr="8" flexShrink={0}>
          <Image height={imageHeight} width={imageHeight} src={LOGO} alt="High Output Ventures" />
        </Flex>
        <HStack spacing="2" height={8}>
          {menuItems?.map((menuItem, idx) => {
            const hasChildren = menuItem?.subMenuItems?.length
            const dynamicKey = `${menuItem?.link}-${idx}`
            return hasChildren ? (
              <Menu key={dynamicKey} label={menuItem?.label} subMenuItems={menuItem.subMenuItems} />
            ) : (
              <Button size="sm" variant="ghost" key={dynamicKey}>
                {menuItem?.label}
              </Button>
            )
          })}
        </HStack>
      </Flex>
      <HStack spacing={4}>
        <Button variant="outline" size="sm">
          Login
        </Button>
        <Button size="sm" colorScheme="blue">
          Sign up
        </Button>
      </HStack>
    </Flex>
  )
}

const MobileNavigation: React.FC<PagesBlocksNavigation> = ({ menuItems }) => {
  const disclosure = useDisclosure()
  const collapsibleDisclosure = useDisclosure()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const imageHeight = useBreakpointValue({ xs: 22, lg: 22 })
  return (
    <>
      <Flex justifyContent="space-between">
        <Flex alignItems="center">
          <Image height={imageHeight || 0} width={imageHeight || 0} src={LOGO} alt="High Output Ventures" />
        </Flex>
        <Box>
          <IconButton
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
              <Image height={imageHeight || 0} width={imageHeight || 0} src={LOGO} alt="High Output Ventures" />
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
        </VStack>
      </Drawer>
    </>
  )
}

export default { DesktopNavigation, MobileNavigation }
