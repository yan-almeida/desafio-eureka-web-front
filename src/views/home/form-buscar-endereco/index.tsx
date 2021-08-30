import { Input } from '@chakra-ui/react'
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useRef
} from 'react'
import { useEffect } from 'react'
import { cepForceMask } from '../../../components/helpers/masks'
import { debounce } from 'lodash'

type DispatchSetState<T> = Dispatch<SetStateAction<T>>

interface FormBuscarEnderecoProps {
  setCep: DispatchSetState<string | null>
  isLoading: boolean
}

const FormBuscarEndereco = ({ isLoading, setCep }: FormBuscarEnderecoProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

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

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <Input
      disabled={isLoading}
      ref={inputRef}
      focusBorderColor="whatsapp.100"
      errorBorderColor="red.300"
      size="lg"
      onKeyUp={cepForceMask}
      onChange={debouncedChangeHandler}
    />
  )
}

export default FormBuscarEndereco
