import { ColorModeScript } from '@chakra-ui/react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import theme from '../src/styles/themes/theme'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ptBR">
        <Head>
          <title>Via Cep - Web front</title>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
