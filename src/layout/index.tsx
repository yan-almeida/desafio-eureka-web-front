import {
  Center,
  Box,
  Heading,
  useColorMode,
  useColorModeValue,
  useMediaQuery
} from '@chakra-ui/react'
import { WithChildren } from '../../@types/with-children'
import ThemeToggleButton from '../components/theme-toggle-button'

const Layout = ({ children }: WithChildren) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

  return (
    <Center h="100vh" bg={useColorModeValue('gray.100', 'gray.800')}>
      <Center
        h="88%"
        w="93%"
        border="2px"
        borderColor={useColorModeValue('blackAlpha.200', 'gray.600')}
        borderRadius="md"
        bg={useColorModeValue('whiteAlpha.600', 'gray.800')}
        flexDirection="column"
        gridGap="10"
      >
        <Heading size={isLargerThan1280 ? '4xl' : '2xl'}>
          Buscador de CEPs 📌
        </Heading>

        <Box w={isLargerThan1280 ? '65%' : '90%'}>{children}</Box>
        <ThemeToggleButton
          checked={colorMode !== 'light'}
          toggle={toggleColorMode}
        />
      </Center>
    </Center>
  )
}

export default Layout
