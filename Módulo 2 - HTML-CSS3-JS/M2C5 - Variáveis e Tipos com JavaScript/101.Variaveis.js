// var e let
/*
var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  console.log(a); // 11
  console.log(b); // 22
}

console.log(a); // 11
console. log(b); // 2
*/
/*
- Escopos diferentes;
- Hoisting; 
- Redeclaração;
- Reatribuição;
- camelCase;
*/

//Exemplo 1
/* numberOne = 1;
console.log(numberOne + 2); // 3
var numberOne; // 3


let numberOne; // Quando for utilizar let, é preciso declarar antes
numberOne = 1;
console.log(numberOne + 2); */

//Exemplo 2
/*
var firstName = 'João';
var lastName = 'Souza'
if(firstName === 'João') {
  var firstName = 'Pedro';
  let lastName = 'Silva';
}

console.log(firstName, lastName); // Pedro Souza
*/

//Exemplo 3
var firstName = 'João';
let lastName = 'Souza'
if(firstName === 'João') {
  let lastName = 'Rodrigues'
  var firstName = 'Pedro';
  lastName = 'Silva';

  console.log(lastName); // Silva
}
console.log(firstName, lastName); // Pedro Souza


