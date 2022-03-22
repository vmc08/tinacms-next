import { FC } from 'react'
import { VStack, Heading, StackProps } from '@chakra-ui/react'

interface BlockHeaderProps extends StackProps {
  title: string
  subtitle: string
}

const BlockHeader: FC<BlockHeaderProps> = ({ title, subtitle, ...rest }) => (
  <VStack spacing={4} {...rest}>
    <Heading color="lightblue.200" as="h6" textTransform="uppercase">
      {title}
    </Heading>
    <Heading maxW="530px" as="h2" textAlign="center">
      {subtitle}
    </Heading>
  </VStack>
)

export default BlockHeader
