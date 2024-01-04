

function tabuada() {

    let num = document.getElementById('txtn') // variavel num, bucando o ID txtn
    let tab = document.getElementById('seltab') // variavel tab buscando o ID seltab


    if (num.value.length == 0) { // Se o valor do num for igual a 0
        alert('Por favor digite um número!')
    } 
    
    
    else { // Se não

        let n = Number(num.value) // Variavel n recebe Valor do número
        let c = 1 // Variavel c recebe valor 11

        tab.innerHTML = ''

        while (c <= 10) { // Se c for menor ou igual 10

            let item = document.createElement('option') // Variavel item, criando o elemento option
            item.text = `${n} x ${c} = ${n*c}` // Item recebe o texto...
            item.value = `tab${c}` // Valor do item...
            tab.appendChild(item) // Anexar o item...

            c++ // Incrementar

        }
    }


}