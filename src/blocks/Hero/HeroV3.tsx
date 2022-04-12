import { Heading, Text, VStack, Box, Stack } from '@chakra-ui/react'

import Button from '@components/Button'
import ResponsiveContainer from '@components/ResponsiveContainer'
import { PagesBlocksHeroV3 } from '../../../.tina/__generated__/types'

const HeroV3: React.FC<PagesBlocksHeroV3> = ({ title, description, background, actionButtons }) => (
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
      <VStack spacing={6} align="center" textAlign="center">
        <Heading as="h1" color="gray.800">
          {title}
        </Heading>
        <Box maxW={{ lg: '45%' }}>
          <Text fontSize={{ lg: 'lg' }} color="gray.600">
            {description}
          </Text>
        </Box>
        <Stack
          width={{ xs: 'full', lg: 'auto' }}
          spacing={4}
          direction={{ xs: 'column', lg: 'row' }}
          alignItems="center"
          justifyContent="space-around"
        >
          {actionButtons?.map((ab, idx) => (
            <Button width={{ xs: 'full', lg: 'auto' }} key={idx} {...(ab?.variant && { variant: ab?.variant })}>
              {ab?.label}
            </Button>
          ))}{' '}
        </Stack>
        <Box textAlign="center">
          <Text>We care about the protection of your data.</Text>
          <Text>Read our Privacy Policy.</Text>
        </Box>
      </VStack>
    </ResponsiveContainer>
  </Box>
)

export default HeroV3
