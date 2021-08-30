import { Center, Box, Heading } from '@chakra-ui/react'
import { WithChildren } from '../../@types/with-children'

const Layout = ({ children }: WithChildren) => {
  return (
    <Center h="100vh" flexDirection="column" gridGap="10">
      <Heading mb="8" size="4xl">
        Buscador de CEPs 📌
      </Heading>

      <Box w="70%">{children}</Box>
    </Center>
  )
}

export default Layout
