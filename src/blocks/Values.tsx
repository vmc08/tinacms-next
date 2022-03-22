import BlockHeader from '@components/BlockHeader'
import { Box, VStack, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import Image from '@components/Image'
import ResponsiveContainer from '@components/ResponsiveContainer'
import { PagesBlocksValues } from '../../.tina/__generated__/types'

const Ecosystem: React.FC<PagesBlocksValues> = ({ title, valueItems }) => {
  const imageWidth = useBreakpointValue({ base: 420, lg: 310 }) || 0
  return (
    <ResponsiveContainer py={{ xs: 14, lg: 28 }}>
      <VStack spacing={14}>
        <BlockHeader mb={2} title="" subtitle={title || ''} />
        <Stack spacing={5} direction={{ xs: 'column', lg: 'row' }} mb={6}>
          {valueItems?.map((e, idx) => (
            <Box key={idx} width={{ base: 'full', lg: '18rem' }}>
              <Box mb={{ xs: 2, lg: 4 }}>
                {e?.image && <Image height={imageWidth / 1.6} width={imageWidth} src={e.image} alt={e.image} />}
              </Box>
              <Text variant="secondary">{e?.description}</Text>
            </Box>
          ))}
        </Stack>
      </VStack>
    </ResponsiveContainer>
  )
}

export default Ecosystem
