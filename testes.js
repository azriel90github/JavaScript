/*
// Function to compute the product of p1 and p2

let resultado = myFunction(3, 4)

function myFunction(p1, p2) {

    return p1 * p2
    
}
*/




// Function is called, the return value will end up in x
/*
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}
*/


//console.log(x)


// Converção Celcius

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);
//console.log(value)



//const car = {type:"Fiat", model:"500", color:"white"};

//console.log(car.color)

const pessoa = {

  firstName:"John", 
  lastName:"Doe", 
  age:50, 
  eyeColor:"blue"

};

//console.log(pessoa.lastName)

// Estudando Objecto
const person = {

  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  morada: "Angola",
  namorada: "Madalena",
  


  fullName : function() {
    return this.firstName + " " + this.lastName + " " + this.id + " " + this.morada;
  }
};


//let nome = person.fullName
//console.log(person.fullName())


let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length; // Buscar o comprimento


//console.log(length)

//Estudando Matriz ou Array

const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];

console.log(car)









