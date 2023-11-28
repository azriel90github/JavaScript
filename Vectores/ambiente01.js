

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/


// Percurso pa ra exibição no Vector

/*

let valores = [8,1,7,4,2,9]

for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/

let num = [5, 8, 2, 9, 3]// Vector num

num.push(1) // Definir como primeiro Número
num.sort() // Definir em Ordem crescente

console.log(num)// Mostrar na 
console.log(`O vector tem ${num.length} posições`)// Mostrar na tela o número de posicões na tela
console.log(`O primeiro valor do vector é ${num[0]}`)//Buscar o valor na posição 0

let pos = num.indexOf(4)// Achar posição do Valor 4 no Vector

if (pos == -1) { // Se o valor da variavel pos for igual a -1, mostrar na tela
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`) // Caso não mostrar o valor na posição 4
}


/*
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
