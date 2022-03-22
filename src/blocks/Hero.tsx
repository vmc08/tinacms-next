import { Flex, Heading, Text, Stack, VStack, SimpleGrid, useBreakpointValue, Box } from '@chakra-ui/react'

import Button from '@components/Button'
import Image from '@components/Image'
import ResponsiveContainer from '@components/ResponsiveContainer'
import { PagesBlocksHero } from '../../.tina/__generated__/types'

const Hero: React.FC<PagesBlocksHero> = ({ title, description, image }) => {
  const imageHeight = useBreakpointValue({ xs: 195, lg: 410 })
  return (
    <Box bg="red.100">
      <ResponsiveContainer py={{ xs: 12, lg: 24 }}>
        <SimpleGrid columns={{ xs: 1, lg: 2 }} spacing={10}>
          <Flex justifyContent="center" alignItems="center" gridRow={{ xs: 1, lg: 'auto' }}>
            {image && <Image height={imageHeight || 0} width={imageHeight || 0} src={image} alt="Image attachment" />}
          </Flex>
          <Flex alignItems="center">
            <VStack spacing={4} align="flex-start">
              <Heading as="h1">{title}</Heading>
              <Text fontSize="lg">{description}</Text>
              <Stack spacing={{ xs: 4, lg: 2 }} direction={{ xs: 'column', lg: 'row' }} w={{ xs: 'full', lg: 'auto' }}>
                <Button w={{ xs: 'full', lg: 'auto' }}>I'm a button</Button>
              </Stack>
            </VStack>
          </Flex>
        </SimpleGrid>
      </ResponsiveContainer>
    </Box>
  )
}

export default Hero
