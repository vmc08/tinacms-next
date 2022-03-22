import { Grid, GridItem, Heading, Text, VStack, Box } from '@chakra-ui/react'

import ResponsiveContainer from '@components/ResponsiveContainer'
import { PagesBlocksVision } from '../../.tina/__generated__/types'

const ExternalBrokers: React.FC<PagesBlocksVision> = ({ title, description }) => {
  const splitDescriptions = description?.split(/\r?\n/).filter((v) => v)
  return (
    <Box bg="yellow.100">
      <ResponsiveContainer py={{ xs: 16, lg: 32 }}>
        <Grid templateColumns="repeat(7, 1fr)" alignItems="center">
          <GridItem d={{ xs: '7', lg: '2' }} colSpan={2} alignItems="center">
            <Heading
              as="h1"
              mb="14"
              bgGradient="linear(to-r, blue.600, #2A437D, #2A437D)"
              color="transparent"
              backgroundClip="text"
              textAlign={{ xs: 'center', lg: 'left' }}
              p={{ xs: '0 10%', lg: 'unset' }}
            >
              {title}
            </Heading>
          </GridItem>
          <GridItem colSpan={{ xs: 7, lg: 5 }} pl={{ xs: 0, lg: 10 }}>
            <VStack spacing={4} alignItems={{ lg: 'flex-start' }} textAlign={{ xs: 'center', lg: 'left' }}>
              {splitDescriptions?.map((d, idx) => (
                <Text key={idx}>{d}</Text>
              ))}
            </VStack>
          </GridItem>
        </Grid>
      </ResponsiveContainer>
    </Box>
  )
}

export default ExternalBrokers
