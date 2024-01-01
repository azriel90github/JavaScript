//funcao verificar
function verificar() {

    var data = new Date(); // Buscar data do Sistema
    var ano = data.getFullYear(); // Buscar o ano completo da variavel data

    var fano = document.getElementById('txtano'); // Chamar o ID da tag input(txtano) 
    var res = document.querySelector('div#res'); // Chamar o ID (res), querySelector da tag div
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {

        alert('[ERROR]Verifique os dados e tente novamente!');

    } else {

        var fsex = document.getElementsByName('radsex'); // Buscar o elemento (radsex) da tag input
        var idade = ano - Number(fano.value); // Variavel idade calculando o ano atual menos o valor do ano de nascimento


        //res.innerHTML = `Idade Calculada: ${idade}`;
        
        var genero =  ''
        
        //variavel img
        var img = document.createElement('img') // Criar elemento img
        img.setAttribute('id', 'foto') // Tag img com o id foto, dentro do JS


        if (fsex[0].checked) { // Se selecionar o fsex 0, como checado é Homem

            genero = 'Homem'


            if (idade >= 0 && idade <10) {
                //criança-------------------------------------
                img.setAttribute('src', 'img/foto-bebe-homem.jpg')

            } else if (idade > 21) {
                //jovem---------------------------------------
                img.setAttribute('src', 'img/foto-jovem-homem.jpg')

            } else if (idade > 50) {
                //adulto--------------------------------------
                img.setAttribute('src', 'img/foto-adulto-homem.jpg')
            } else {
                //idoso---------------------------------------
                img.setAttribute('src', 'img/foto-idoso-homem.jpg')
            }



        } else if (fsex[1].checked) { // Se selecionar o fsex 1, como checado é Mulher

            genero = 'Mulher'


            if (idade >= 0 && idade >10) {
                //criança----------------------------------
                img.setAttribute('src', 'img/foto-bebe-mulher')

            } else if (idade < 21) {
                //jovem------------------------------------
                img.setAttribute('src', 'img/foto-jovem-mulher')

            } else if (idade < 50) {
                //adulto ----------------------------------   
                img.setAttribute('src', 'img/foto-senhora-mulher')

            } else {
                //idoso------------------------------------
                img.setAttribute('src', 'img/foto-idosa-mulher')
            }
        }

        img.style.height = '200px'
        img.style.width = '200px'
        img.style.borderRadius = '50%'

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
    

}