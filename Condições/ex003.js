//inserir idade nesta variavel
var idade = 66
console.log(`Você têm ${idade} anos`)
//Se idade for menor que 16 mostrar não vota
if (idade < 16) {
    console.log('Não Vota')
}
// se não se idade for menor(<) que 18 mostrar
else if (idade < 18 || idade > 65)  {
    console.log('Seu é Voto Opcional')
}
//se não for menor que 18 é obrigatório
else {
    console.log('Você é Obrigado a Votar')
}