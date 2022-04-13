import { Heading, Text, HStack, VStack, Box, Flex, SimpleGrid } from '@chakra-ui/react'
import Image from '@components/Image'

import ResponsiveContainer from '@components/ResponsiveContainer'
import { PagesBlocksFeaturesV1 } from '../../../.tina/__generated__/types'

const FeaturesV1: React.FC<PagesBlocksFeaturesV1> = ({ title, subtitle, description, features }) => (
  <ResponsiveContainer py={{ xs: 20, lg: 24 }}>
    <VStack spacing={2} mb={4} alignItems={{ xs: 'flex-start', lg: 'center' }}>
      <Text textTransform="uppercase" color="indigo.600" fontWeight="semibold">
        {title}
      </Text>
      <Heading m={0} as="h2">
        {subtitle}
      </Heading>
    </VStack>
    <Box textAlign={{ lg: 'center' }} maxW={{ xs: 'full', lg: '50%' }} mx="auto" mb="10">
      <Text fontSize="lg" color="gray.500">
        {description}
      </Text>
    </Box>
    <SimpleGrid columns={{ xs: 1, lg: 2 }} spacing={8}>
      {features?.map((f, idx) => (
        <HStack key={idx} alignItems="flex-start" spacing={4}>
          {f?.imageIcon && (
            <Flex flexShrink={0}>
              <Image width={48} height={48} src={f.imageIcon} />
            </Flex>
          )}
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

export default FeaturesV1
