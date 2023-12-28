
function contar() {// Função Contar
    let ini = document.getElementById('txti');//var inicio
    let fim = document.getElementById('txtf');//var fim
    let passo = document.getElementById('txtp');//var passo
    let res = document.getElementById('resultado');//var para o valor do resultado

    if (ini.value.length == 0 || fim.value.length ==0 || passo.value.length ==0) {
        //alert('[ERRO] Faltam dados');
        res.innerHTML = 'Impossível Contar'
    }//se os valores na tela forem igual a  0, alertar: 

    else { // se não mostrar contando
        res.innerHTML = 'Contando: ';//mostrar resultado
        let i = Number(ini.value);//converção para numero
        let f = Number(fim.value);//converção para numero
        let p = Number(passo.value);//converção para numero

        if ( p <= 0) {
            alert('Passo Inválido! Considerar passo 1')
            p = 1
        }

        //Contagem Crescente
        if (i < f) {
            for ( let c = i; c <= f; c += p) {// ciclo for
                // se a variavel c receber i no inicio; e c for menor ou igual a f no final; incrementa o passo mais o até ao último número
                res.innerHTML += `${c} \u{1F449}`;// incrementar e mostrar na tela o resultado de f , mais o emoji!
            }
        } 
        // Contagem Regressiva
        else {
            for ( let c = i; c >= f; c -= p) {// ciclo for
                // se a variavel c receber i no inicio; e c for menor ou igual a f no final; incrementa o passo mais o até ao último número
                res.innerHTML += `${c} \u{1F449}`;// incrementar e mostrar na tela o resultado de f , mais o emoji!
            }
        }
        res.innerHTML += `\u{1F3C1}`;// Mostrar Resultado
    }

}