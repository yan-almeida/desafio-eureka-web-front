import { Box, Heading, Skeleton, Text, VStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { buscarEndereco } from '../../api/endereco'
import { toast } from '../../styles/themes/theme'
import FormBuscarEndereco from './form-buscar-endereco'

type EnderecoTypes =
  | 'logradouro'
  | 'complemento'
  | 'bairro'
  | 'localidade'
  | 'uf'
  | 'ibge'
  | 'gia'
  | 'ddd'
  | 'siafi'

type PartialEnderecoType = Partial<Record<EnderecoTypes, string>>

export interface IEndereco extends PartialEnderecoType {
  cep: string
  buscadoQuando: Date
}

const Home = () => {
  const [loading, setLoading] = useState(false)

  const [cep, setCep] = useState<string | null>(null)
  const [endereco, setEndereco] = useState<IEndereco | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  const focusField = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    focusField()
  }, [inputRef, loading])

  const handleSearch = useCallback(async (cep: string) => {
    setLoading(true)

    try {
      const response = await buscarEndereco(cep)

      if (response) {
        setEndereco(response)
        return
      }

      setCep(null)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (cep) {
      handleSearch(cep)
    }
  }, [cep])

  useEffect(() => {
    toast({
      title: 'Busque um CEP!',
      description: 'Digite e aguarde 🙌🙌',
      status: 'success',
      isClosable: true,
      position: 'top-right'
    })
  }, [])

  return (
    <VStack spacing="2">
      <FormBuscarEndereco
        setCep={setCep}
        isLoading={loading}
        inputRef={inputRef}
      />

      {cep && (
        <Box w="100%">
          <Skeleton isLoaded={!loading} my="3">
            <Heading size="lg">{`CEP buscado: ${
              endereco?.cep ?? '...'
            }`}</Heading>
          </Skeleton>

          <Skeleton isLoaded={!loading}>
            <Text>{`${endereco?.localidade ?? '...'} - ${
              endereco?.uf ?? '...'
            }`}</Text>

            <Text>{`${endereco?.logradouro ?? '...'} - ${
              endereco?.bairro ?? '...'
            }`}</Text>
          </Skeleton>
        </Box>
      )}
    </VStack>
  )
}

export default Home
