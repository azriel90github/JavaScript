
let num = document.querySelector('input#fnum') // Buscando ID fnum
let lista = document.querySelector('select#flista') // Buscando ID flista
let res = document.querySelector('div#res') // Buscar ID res
let valores = [] // Criandp Vector Valores


function isNumero(n) { // Função isNumero(n)

    if (Number(n) >= 1 && Number(n) <= 100) { // Se (n) for maior que 1 e (n) for menor ou igual a 100 retornar...
        return true

    } else { // Se não retornar...
        return false
    }

}

function inLista(n, l) { // Função inLista (n,1)

    if (l.indexOf(Number(n)) != -1) { // Verificar se o valor (n) esta na lista (l)
        return true

    } else { // Se não retornar...
        return false
    }
}


//------------------------------------------------------------
function adicionar() { // Função adicionar

    if (isNumero(num.value) && !inLista(num.value, valores)) { // Função número

        valores.push(Number(num.value))

        var item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado.`
        lista.appendChild(item)

        res.innerHTML = ''


    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }

    num.value = ''
    num.focus()

}


function finalizar() {

    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {

        let total = valores.length

        let maior = valores[0]
        let menor = valores[0]

        let soma = 0
        let media = 0

        for( let pos in valores ) {

            soma += valores[pos]

            if ( valores[pos] > maior ) {
                maior = valores[pos]
            } if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastros.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`


    }
}

