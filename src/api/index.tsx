import Axios, { AxiosError } from 'axios'
import { SWRConfiguration } from 'swr'
import { HttpMethods } from '../../@types/requests-methods'
import { error } from '../components/helpers/toasts'

const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API_CORE ?? ''
})

export function formatError(errors: AxiosError) {
  if (errors.response) {
    if (errors.response.status === 400) {
      if (errors.response.data.errors) {
        error('Não foi possivel realizar a operação')
      } else {
        for (const key of Object.keys(errors.response.data)) {
          for (const errorMessage of errors.response.data[key]) {
            error(errorMessage)
          }
        }

        throw new Error()
      }
      return errors.response.data
    }
    if (errors.response.status === 401) {
      return
    }
    if (errors.response.status === 404) {
      return
    }
  }
}

async function dataFetcher<TResponse = any>(
  url: string,
  method: HttpMethods = 'get'
) {
  try {
    const response = await api.request({ method, url })
    return response.data as TResponse
  } catch (error) {
    console.error('ERRO NA REQUISIÇÃO: ', error)
    throw error
  }
}

export const swrConfiguration: SWRConfiguration = {
  fetcher: dataFetcher,
  errorRetryCount: 3,
  revalidateOnFocus: true,
  shouldRetryOnError: true
}

export default api
