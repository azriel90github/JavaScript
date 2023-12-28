function local() {

    var localidade = document.getElementById('localidade');
    var morada = document.getElementById('morada');
    var local = (localidade.value)
    morada.innerHTML = `Você é ${local}`

    if (local == 'Brasil') {
        morada.innerHTML = '<p>Você é Brasileiro!</p>'
    } else {
        morada.innerHTML = '<p>Você é estrangeiro!</p>'
        morada.innerHTML += '<p>Seja bem vindo ao <strong>Brasil</strong></p>'
    }

}
