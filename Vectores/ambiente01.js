

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

let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()

console.log(num)
console.log(`O vector tem ${num.length} posições`)
console.log(`O primeiro valor do vector é ${num[0]}`)

let pos = num.indexOf(4)

if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}


/*
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
