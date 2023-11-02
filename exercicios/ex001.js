//alert('Olá')

function carregar() {
    var fundo = document.querySelector('body#corpo')
    var mensagem = document.getElementById('mensagem')
    var foto = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 16
    mensagem.innerHTML =`<p>Agora são ${hora} horas</p>`

    if ( hora >=0 && hora < 12) {
        //bom dia
        foto.src = 'img/ex001/01.jpg'
        fundo.style.background = '#CCBF5E'//cor do fundo
        mensagem.innerHTML += 'Bom dia pra si'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        foto.src = 'img/ex001/02.jpg'
        fundo.style.background = '#CC6630'//cor do fundo
        mensagem.innerHTML += 'Passe bem a Tarde'
    }else {
        //boa noite
        foto.src = 'img/ex001/03.jpg'
        fundo.style.background = '#514064'//cor do fundo
        mensagem.innerHTML += 'Boa noite e bons Sonhos'
    }
}