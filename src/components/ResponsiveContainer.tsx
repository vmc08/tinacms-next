import { FC } from 'react'
import { Container, ContainerProps } from '@chakra-ui/react'

const ResponsiveContainer: FC<ContainerProps> = ({ children, ...rest }) => (
  <Container maxW={{ sm: 'container.sm', md: 'container.md', lg: 'container.xl' }} {...rest}>
    {children}
  </Container>
)

export default ResponsiveContainer
