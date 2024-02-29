const form = document.querySelector('form');
const resposta = document.querySelector('.resposta');

form.addEventListener('submit', event => {
    event.preventDefault();

    const anoDeNascimento = form.anoDeNascimento.value
    const anoAtual = form.anoAtual.value

    if( anoAtual < anoDeNascimento ) {
        resposta.innerHTML = `<p> O ano de nascimento não pode ser maior que o ano atual </p>`
        resposta.classList.add('resposta--negativa')
        return
    }

    const idade = anoAtual - anoDeNascimento;

    resposta.innerHTML = `<p> Sua idade é de ${idade} anos </p>`
    resposta.classList.remove('resposta--positiva')

    form.reset()
})