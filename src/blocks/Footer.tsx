import { HStack, Flex, Box } from '@chakra-ui/react'

import Button from '@components/Button'
import ResponsiveContainer from '@components/ResponsiveContainer'
import { PagesBlocksFooter } from '../../.tina/__generated__/types'

const Footer: React.FC<PagesBlocksFooter> = ({ menuItems }) => {
  return (
    <Box bg="gray.300">
      <ResponsiveContainer py={{ xs: 6, lg: 12 }}>
        <Flex justifyContent="space-between" d={{ xs: 'none', xl: 'flex' }}>
          <Flex>
            <HStack spacing="2">
              {menuItems?.map((menuItem) => (
                <Button size="md" variant="ghost" key={menuItem?.link}>
                  {menuItem?.label}
                </Button>
              ))}
            </HStack>
          </Flex>
          <Flex>&copy; copyright 2022</Flex>
        </Flex>
      </ResponsiveContainer>
    </Box>
  )
}

export default Footer
