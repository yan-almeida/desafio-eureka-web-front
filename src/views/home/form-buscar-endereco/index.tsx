import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue
} from '@chakra-ui/react'
import React, {
  ChangeEvent,
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback
} from 'react'
import { cepForceMask } from '../../../components/helpers/masks'
import { debounce } from 'lodash'
import { SearchIcon } from '@chakra-ui/icons'

type DispatchSetState<T> = Dispatch<SetStateAction<T>>

interface FormBuscarEnderecoProps {
  setCep: DispatchSetState<string | null>
  isLoading: boolean
  inputRef: RefObject<HTMLInputElement>
}

const FormBuscarEndereco = ({
  isLoading,
  setCep,
  inputRef
}: FormBuscarEnderecoProps) => {
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const { value: cep } = e.target

    if (!cep) {
      setCep(null)

      return
    }

    setCep(cep)
  }

  const debouncedChangeHandler = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      handleChange(e)
    }, 750),
    []
  )

  return (
    <InputGroup>
      <InputLeftElement
        h="100%"
        pointerEvents="none"
        color={useColorModeValue('gray.500', 'gray.300')}
        fontSize="1.5em"
        display="flex"
        children={<SearchIcon />}
      />
      <Input
        border="2px"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        bg={useColorModeValue('gray.100', 'gray.700')}
        disabled={isLoading}
        ref={inputRef}
        focusBorderColor="whatsapp.200"
        errorBorderColor="red.300"
        size="lg"
        onKeyUp={cepForceMask}
        onChange={debouncedChangeHandler}
      />
    </InputGroup>
  )
}

export default FormBuscarEndereco
