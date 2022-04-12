import { Heading, Text, VStack, Icon, Box } from '@chakra-ui/react'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'

import Button from '@components/Button'
import ResponsiveContainer from '@components/ResponsiveContainer'
import { PagesBlocksHeroV2 } from '../../../.tina/__generated__/types'

const HeroV2: React.FC<PagesBlocksHeroV2> = ({ title, description, background, button }) => (
  <Box
    {...(background && {
      sx: {
        background: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
    })}
  >
    <ResponsiveContainer py={{ xs: 20, lg: 40 }}>
      <VStack spacing={8} align="center" textAlign="center">
        <Heading as="h1" {...(background && { color: 'white' })}>
          {title}
        </Heading>
        <Text fontSize={{ xs: 'xl', lg: '3xl' }} {...(background && { color: 'gray.200' })}>
          {description}
        </Text>
        <Button bg="orange.300" color="white" rightIcon={<Icon as={ArrowNarrowRightIcon} />}>
          {button?.label}
        </Button>
      </VStack>
    </ResponsiveContainer>
  </Box>
)

export default HeroV2
