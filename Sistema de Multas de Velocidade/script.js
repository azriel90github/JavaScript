function calcular() {
    var valor_velocidade = document.querySelector('input#valor')
    var resultado = document.querySelector('div#resultado')
    var valor = Number(valor_velocidade.value)
    resultado.innerHTML = `<p>Sua velocidade atual é de <strong>${valor}Km/h</strong><br></p>`
    //condição simples
    if (valor > 60) {
        resultado.innerHTML += `<p>Você ultrapassou o limite de velocidade. MULTADO!</p>`
    }
    resultado.innerHTML += `<p>Diriga sempre usando o cinto de Segurança. Obrigado</p>`
}