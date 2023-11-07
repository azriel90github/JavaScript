//funcao verificar
function verificar() {

    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    
    if (fano.value.length == 0 || fano.value > ano) {

        alert('[ERROR]Verifique os dados e tente novamente!');

    } else {

        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        //res.innerHTML = `Idade Calculada: ${idade}`;
        var genero =  ''
        //variavel img
        var img = document.createElement('img')
        //tag img com o id foto, dentro do JS
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade >10) {
                //criança
                img.setAttribute('src', 'foto-bebe-homem.jpg')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-homem.jpg')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-homem.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade >10) {
                //criança
                img.setAttribute('src', 'foto-bebe-mulher')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-mulher')

            } else if (idade < 50) {
                //adulto    
                img.setAttribute('src', 'foto')

            } else {
                //idoso
                img.setAttribute('src', 'caminho da foto')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }

}