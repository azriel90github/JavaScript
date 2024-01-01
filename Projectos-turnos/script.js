//alert('Olá')

function carregar() { //Função Carregar

    var fundo = document.querySelector('body#corpo') //Variavél fundo
    var mensagem = document.getElementById('mensagem') //Variavél mensagem
    var foto = document.getElementById('imagem') //Variavél foto

    var data = new Date() // Variavel data, buscando a data do sitema
    var hora = data.getHours() // Variavel hora chamando apenas a hora da variavel data
    
    mensagem.innerHTML =`<p>Agora são ${hora} horas</p>` //Mostrar dentro da ID mensagem essa mensagem...

    if ( hora >=0 && hora < 12) { //Se hora for maior ou igual  a 0 e hora for menor que 12
        //bom dia---------------------------------------
        foto.src = 'img/ex001/01.jpg' //Mostrar essa foto dentro do querySelector com ID corpo
        fundo.style.background = '#CCBF5E'//Colocar no ID fundo o estilo de cor...
        mensagem.innerHTML += 'Bom dia pra si' //Auto incrementar no ID a mensagem...
    } 
    
    
    else if (hora >= 12 && hora < 18) {
        //boa tarde-------------------------------------
        foto.src = 'img/ex001/02.jpg' //Mostrar essa foto dentro do querySelector com ID corpo
        fundo.style.background = '#CC6630' //Colocar no ID fundo o estilo de cor...
        mensagem.innerHTML += 'Passe bem a Tarde' //Auto incrementar no ID a mensagem...
    }
    
    else {
        //boa noite-------------------------------------
        foto.src = 'img/ex001/03.jpg' //Mostrar essa foto dentro do querySelector com ID corpo
        fundo.style.background = '#514064' //Colocar no ID fundo o estilo de cor... 
        mensagem.innerHTML += 'Boa noite e bons Sonhos' //Auto incrementar no ID a mensagem...
    }
}