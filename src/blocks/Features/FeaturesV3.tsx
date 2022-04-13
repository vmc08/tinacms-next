import { Text, VStack, Box, SimpleGrid } from '@chakra-ui/react'
import Image from '@components/Image'

import ResponsiveContainer from '@components/ResponsiveContainer'
import { PagesBlocksFeaturesV3 } from '../../../.tina/__generated__/types'

const FeaturesV3: React.FC<PagesBlocksFeaturesV3> = ({ features }) => (
  <ResponsiveContainer py={{ xs: 20, lg: 24 }}>
    <SimpleGrid columns={{ xs: 1, lg: 3 }} spacing={8}>
      {features?.map((f, idx) => (
        <Box key={idx}>
          {f?.imageIcon && (
            <Box mb={5}>
              <Image width={48} height={48} src={f.imageIcon} />
            </Box>
          )}
          <VStack spacing={2} alignItems="flex-start">
            <Text fontSize="lg" fontWeight="medium">
              {f?.title}
            </Text>
            <Text color="gray.500">{f?.description}</Text>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  </ResponsiveContainer>
)

export default FeaturesV3
