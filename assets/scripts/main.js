$(document).ready(() => {
    $('#cep').mask('00000-000')
    $('#cpf').mask('000.000.000-00')
    $('#telefone').mask('(00) 00000-0000')

    const modeloDeMensagemParaRequired = campo => `Por favor, informe o seu ${campo}`
    const modeloDeMensagemParaInvalido = campo => `Por favor, informe um ${campo} válido`

    $('form').validate({
        rules: {
            nomeCompleto: { required: true },
            email: { required: true, email: true },
            telefone: { required: true, minlength: 15 },
            endereco: { required: true },
            cpf: { required: true, minlength: 14 },
            cep: { required: true, minlength: 9 }
        },
        messages: {
            nomeCompleto: modeloDeMensagemParaRequired('nome'),
            email: {
                required: modeloDeMensagemParaRequired('email'),
                email: modeloDeMensagemParaInvalido('email')
            },
            telefone: {
                required: modeloDeMensagemParaRequired('telefone'),
                minlength: modeloDeMensagemParaInvalido('telefone')
            },
            cpf: {
                required: modeloDeMensagemParaRequired('CPF'),
                minlength: modeloDeMensagemParaInvalido('CPF')
            },
            endereco: modeloDeMensagemParaRequired('endereço'),
            cep: {
                required: modeloDeMensagemParaRequired('CEP'),
                minlength: modeloDeMensagemParaInvalido('CEP')
            },
        }
    })
})