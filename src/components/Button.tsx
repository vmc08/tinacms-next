import { FC } from 'react'
import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react'

const Button: FC<ButtonProps> = ({ children, ...rest }) => <ChakraButton {...rest}>{children}</ChakraButton>

export default Button
