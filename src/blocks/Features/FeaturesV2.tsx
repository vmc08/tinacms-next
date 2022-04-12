import { Heading, Text, HStack, VStack, Box, SimpleGrid, Icon } from '@chakra-ui/react'
import { CheckIcon } from '@heroicons/react/solid'

import ResponsiveContainer from '@components/ResponsiveContainer'
import { PagesBlocksFeaturesV2 } from '../../../.tina/__generated__/types'

const FeaturesV2: React.FC<PagesBlocksFeaturesV2> = ({ title, description, features }) => (
  <ResponsiveContainer py={{ xs: 20, lg: 24 }}>
    <VStack spacing={2} mb={4}>
      <Heading m={0} as="h2">
        {title}
      </Heading>
    </VStack>
    <Box textAlign="center" maxW={{ sm: 'full', lg: '50%' }} mx="auto" mb="10">
      <Text fontSize="lg" color="gray.500">
        {description}
      </Text>
    </Box>
    <SimpleGrid columns={{ sm: 1, lg: 4 }} spacing={8}>
      {features?.map((f, idx) => (
        <HStack key={idx} alignItems="flex-start" spacing={4}>
          <Icon fontSize="24px" color="green.500" as={CheckIcon} />
          <VStack spacing={2} alignItems="flex-start">
            <Text fontSize="lg" fontWeight="medium">
              {f?.title}
            </Text>
            <Text color="gray.500">{f?.description}</Text>
          </VStack>
        </HStack>
      ))}
    </SimpleGrid>
  </ResponsiveContainer>
)

export default FeaturesV2
