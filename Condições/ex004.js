var agora = new Date()//para o servidor
var hora = agora.getHours()
//mostrar a hora na tela
console.log(`Agora são exatamente ${hora} horas`)
//se a hora for menor que 12h mostrar bom dia
if (hora < 12) {
    console.log('Bom dia!')
}
//senão, se memor ou igual a 18h mostrar Boa Tarde
else if (hora <= 18) {
    console.log('Boa Tarde!')
}
//senão mostrar boa noite
else {
    console.log('Boa noite!')
}
