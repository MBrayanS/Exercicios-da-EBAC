$(document).ready( () => {
    const formulario = $('form')
    const listaDeTarefas = $('.lista-de-tarefas')

    formulario.on('submit', adicionarTarefa)

    function adicionarTarefa( evento ) {
        evento.preventDefault()

        const nomeDaTarefa = $('#nomeDaTarefa').val()
        const novaTarefa = $(`<li class="tarefa">${nomeDaTarefa}</li>`)

        novaTarefa.on('click', () => novaTarefa.toggleClass('tarefa--concluida') )

        listaDeTarefas.append(novaTarefa)

        $('#nomeDaTarefa').val('')
    }
})

