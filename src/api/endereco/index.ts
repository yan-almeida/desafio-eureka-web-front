import api from '..'
import { info } from '../../components/helpers/toasts'
import { IEndereco } from '../../views/home'

const BASE_URL = 'endereco'

export const buscarEndereco = async (cep: string) => {
  try {
    const response = await api.get<IEndereco>(`${BASE_URL}/${cep}`)

    return response.data
  } catch (e) {
    info('CEP não encontrado.')
  }
}
