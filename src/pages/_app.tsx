import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

import Tina from '../../.tina/components/TinaDynamicProvider.js'
import theme from 'theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Tina>
      <ChakraProvider theme={theme}>
        <Head>
          <title>{process.env.appName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </Tina>
  )
}

export default App
