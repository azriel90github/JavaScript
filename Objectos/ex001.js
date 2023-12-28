// Criando Objecto Pessoa
let pessoa = { //Objecto Pessoa

    nome: 'Suélio', //propriedade nome do objecto pessoa 

    sexo: 'M', //propriedade nome do objecto pessoa

    peso: 85.4, //propriedade nome do objecto pessoa

    engordar(p=0) { //Função Engordar dentro do objecto pessoa
        console.log('Engordou') //Mostrar na tela
        this.peso += p // Objecto pessoa, junto com o peso mais o peso adicionado 
    }
}

pessoa.engordar(3) //Adicionando valor 3 na função engordar 

console.log(`O ${pessoa.nome} pesa ${pessoa.peso} Kg`) 
//Mostrar na tela o nome do objecto pessoa, junto com o peso do objecto pessoa 