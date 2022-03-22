import { Box, useBreakpointValue } from '@chakra-ui/react'
import ResponsiveContainer from '@components/ResponsiveContainer'
import Navigation from '@components/Navigation'
import { PagesBlocksNavigation } from '../../.tina/__generated__/types'

const MainNavigation: React.FC<PagesBlocksNavigation> = (props) => {
  const showDekstopNav = useBreakpointValue({ xl: true })
  return (
    <Box py={{ xs: 4, lg: 5 }}>
      <ResponsiveContainer>
        {showDekstopNav ? <Navigation.DesktopNavigation {...props} /> : <Navigation.MobileNavigation {...props} />}
      </ResponsiveContainer>
    </Box>
  )
}

export default MainNavigation
