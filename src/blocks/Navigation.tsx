import { Box, useBreakpointValue } from '@chakra-ui/react'
import ResponsiveContainer from '@components/ResponsiveContainer'
import Navigation from '@components/Navigation'
import { PagesBlocksNavigation } from '../../.tina/__generated__/types'

const MainNavigation: React.FC<PagesBlocksNavigation> = (props) => {
  const showDekstopNav = useBreakpointValue({ xl: true })
  return (
    <Box py={4} borderBottom="1px solid #E2E8F0;">
      <ResponsiveContainer>
        {showDekstopNav ? <Navigation.DesktopNavigation {...props} /> : <Navigation.MobileNavigation {...props} />}
      </ResponsiveContainer>
    </Box>
  )
}

export default MainNavigation
