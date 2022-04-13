import { Text, HStack, IconButton, VStack } from '@chakra-ui/react'

import ResponsiveContainer from '@components/ResponsiveContainer'
import { getSocialIcon, IconType } from '@utils/iconUtils'
import { PagesBlocksFoooterV2 } from '../../../.tina/__generated__/types'

const FooterV2: React.FC<PagesBlocksFoooterV2> = ({ socials, links, footNote }) => {
  return (
    <ResponsiveContainer py={{ xs: 12, lg: 16 }}>
      <VStack spacing={8}>
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
        <HStack spacing="4" alignItems="flex-start">
          {(links || []).map((l, lidx) => (
            <Text key={lidx} color="gray.500">
              {l?.label}
            </Text>
          ))}
        </HStack>
        <Text color="gray.400" textAlign="center">
          {footNote}
        </Text>
      </VStack>
    </ResponsiveContainer>
  )
}

export default FooterV2
