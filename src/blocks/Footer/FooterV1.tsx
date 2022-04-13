import { SimpleGrid, Box, VStack, Text, HStack, IconButton, Stack, Divider } from '@chakra-ui/react'

import Image from '@components/Image'
import ResponsiveContainer from '@components/ResponsiveContainer'
import { getSocialIcon, IconType } from '@utils/iconUtils'
import { PagesBlocksFoooterV1 } from '../../../.tina/__generated__/types'

const FooterV1: React.FC<PagesBlocksFoooterV1> = ({ logo, description, socials, groups, footNote }) => {
  return (
    <ResponsiveContainer py={{ xs: 12, lg: 16 }}>
      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 12, lg: 8 }}>
        <VStack width={{ xs: 'full', lg: '30%' }} spacing={8} alignItems="flex-start">
          {logo && (
            <Box>
              <Image width={44} height={44} src={logo} alt="Logo" />
            </Box>
          )}
          <Text color="gray.500">{description}</Text>
          <HStack spacing="4">
            {(socials || []).map((s, idx) => {
              const SocialIcon = s ? getSocialIcon(s.type as IconType) : null
              return SocialIcon ? (
                <IconButton
                  key={idx}
                  size="xs"
                  variant="ghost"
                  colorScheme="teal"
                  aria-label="Send email"
                  isRound
                  icon={<SocialIcon width={5} height={5} />}
                />
              ) : null
            })}
          </HStack>
        </VStack>
        <SimpleGrid columns={{ xs: 2, lg: 4 }} spacing={8} width={{ xs: 'full', lg: '70%' }}>
          {(groups || []).map((g, gidx) => {
            const links = g?.links || []
            return (
              <VStack key={gidx} spacing="4" alignItems="flex-start">
                <Text fontSize="sm" color="gray.400" fontWeight="semibold" textTransform="uppercase">
                  {g?.groupName}
                </Text>
                {links.map((l, lidx) => (
                  <Text key={lidx} color="gray.500">
                    {l?.label}
                  </Text>
                ))}
              </VStack>
            )
          })}
        </SimpleGrid>
      </Stack>
      <Divider mt={12} mb={8} />
      <Text color="gray.400" textAlign="center">
        {footNote}
      </Text>
    </ResponsiveContainer>
  )
}

export default FooterV1
