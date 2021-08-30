import { Box, Center, useMediaQuery } from '@chakra-ui/react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

interface Props {
  checked: boolean
  toggle: () => void
}
const ThemeToggleButton = ({ checked, toggle }: Props) => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

  return (
    <Center
      position="absolute"
      justifyContent="flex-start"
      flexDirection={isLargerThan1280 ? 'row' : 'column'}
      w="100%"
      h="100%"
    >
      <Box ml={isLargerThan1280 ? '4' : ''} mt={isLargerThan1280 ? '' : '4'}>
        <DarkModeSwitch
          style={{ marginRight: 8 }}
          checked={checked}
          onChange={toggle}
          size={24}
        />
      </Box>
    </Center>
  )
}

export default ThemeToggleButton
