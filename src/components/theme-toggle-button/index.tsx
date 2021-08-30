import { Flex } from '@chakra-ui/react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

interface Props {
  checked: boolean
  toggle: () => void
}
const ThemeToggleButton = ({ checked, toggle }: Props) => {
  return (
    <Flex position="absolute" justifyContent="flex-start" bottom="5">
      <DarkModeSwitch
        style={{ marginRight: 8 }}
        checked={checked}
        onChange={toggle}
        size={24}
      />
    </Flex>
  )
}

export default ThemeToggleButton
