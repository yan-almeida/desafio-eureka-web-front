import * as Yup from 'yup'

export const buscarEnderecoSchema = Yup.object().shape({
  cep: Yup.string().test('validar mascara cep', 'CEP inválido', (cep) => {
    const cepValido = cep?.match(/^[\d]{5}-[\d]{3}/)

    if (!cepValido) {
      return false
    }

    return true
  })
})
