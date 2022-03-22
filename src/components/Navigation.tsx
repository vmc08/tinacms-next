import { useRef } from 'react'
import { Box, Flex, HStack, Icon, IconButton, useBreakpointValue, useDisclosure, VStack } from '@chakra-ui/react'
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid'

import Button from '@components/Button'
import Image from '@components/Image'
import Drawer from '@components/Drawer'
import { PagesBlocksNavigation } from '../../.tina/__generated__/types'

const LOGO = '/logo.png'

const DesktopNavigation: React.FC<PagesBlocksNavigation> = ({ menuItems }) => {
  const imageHeight = useBreakpointValue({ xs: 40, lg: 40 })
  return (
    <Flex justifyContent="space-between" d={{ xs: 'none', xl: 'flex' }}>
      <Flex>
        <Box mr="12" flexShrink={0}>
          <Image height={imageHeight || 0} width={imageHeight || 0} src={LOGO} alt="High Output Ventures" />
        </Box>
        <HStack spacing="2">
          {menuItems?.map((menuItem) => (
            <Button size="md" variant="ghost" key={menuItem?.link}>
              {menuItem?.label}
            </Button>
          ))}
        </HStack>
      </Flex>
    </Flex>
  )
}

const MobileNavigation: React.FC<PagesBlocksNavigation> = ({ menuItems }) => {
  const disclosure = useDisclosure()
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
          {menuItems?.map((menuItem) => (
            <Button size="md" variant="ghost" key={menuItem?.link}>
              {menuItem?.label}
            </Button>
          ))}
        </VStack>
      </Drawer>
    </>
  )
}

export default { DesktopNavigation, MobileNavigation }
