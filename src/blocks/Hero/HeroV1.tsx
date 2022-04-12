import { Heading, Text, VStack, Box, Stack, Input } from '@chakra-ui/react'

import Button from '@components/Button'
import ResponsiveContainer from '@components/ResponsiveContainer'
import { PagesBlocksHeroV1 } from '../../../.tina/__generated__/types'

const HeroV1Form: React.FC<PagesBlocksHeroV1['form']> = ({ button, placeholder }) => {
  return (
    <Box>
      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={3} mb="4">
        <Input size="lg" {...(placeholder && { placeholder })} />
        {button && (
          <Button colorScheme="blue" size="lg" {...(button.variant && { variant: button.variant })}>
            {button.label}
          </Button>
        )}
      </Stack>
      <Text fontSize="sm">We care about the protection of your data. Read our Privacy Policy.</Text>
    </Box>
  )
}

const HeroV1: React.FC<PagesBlocksHeroV1> = (props) => {
  const { title, description, background, form } = props
  return (
    <Stack direction={{ xs: 'column', lg: 'row' }}>
      <ResponsiveContainer width={{ xs: 'full', lg: '60%' }} py={{ xs: 20, lg: 40 }} alignItems="center">
        <VStack
          textAlign={{ xs: 'center', lg: 'left' }}
          spacing={8}
          maxW={{ xs: 'full', lg: '40%' }}
          margin={{ lg: 'auto' }}
        >
          <Heading as="h1">{title}</Heading>
          <Text fontSize="lg">{description}</Text>
          <HeroV1Form {...form} />
        </VStack>
      </ResponsiveContainer>
      <Box
        width={{ xs: 'full', lg: '40%' }}
        minH="330px"
        {...(background && {
          sx: {
            background: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          },
        })}
      />
    </Stack>
  )
}

export default HeroV1
