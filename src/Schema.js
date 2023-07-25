import * as Yup from 'yup'

export default Yup.object().shape({
    email: Yup.string()
        .email('O e-mail fornecido não é válido.')
        .required('Por favor, insira um endereço de e-mail válido para prosseguir.')
})