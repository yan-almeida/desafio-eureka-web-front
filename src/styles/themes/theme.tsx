import {
  createStandaloneToast,
  extendTheme,
  ThemeConfig,
} from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  breakpoints,
  fonts: {
    heading: 'Poppins',
    body: 'Inter',
  },
  styles: {
    global: {
      '.chakra-slide.chakra-modal__content form': {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      },
      '.chakra-ui-light': {
        background: '#FAFAFA',
      },
    },
  },
})

export const toast = createStandaloneToast({ theme })

export default theme