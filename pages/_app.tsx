import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/900.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { SWRConfig } from 'swr'
import { swrConfiguration } from '../src/api/index'
import Layout from '../src/layout'
import theme from '../src/styles/themes/theme'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <SWRConfig value={swrConfiguration}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </ChakraProvider>
  )
}

export default App
