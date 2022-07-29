// IF/ELSE

// Forma de declarar o if/else 1
function numeroPositivo(num) {
  let resultado;

  if(num < 0) { // Condição
    resultado = false; // Declaração 1 (dentro do if): Ocorre caso a condição seja verdadeira
  } else {
    resultado = true;  // Declaração 2 (dentro do else): Ocorre caso a condição seja falsa
  }
  return resultado;
}

numeroPositivo(2) // true
numeroPositivo(-9) // false

// Forma de declarar o if/else 2
function numeroPositivo(num) {
  let resultado;

  const ehNegativo = num < 0;

  if(ehNegativo) { 
    resultado = false; 
  } else {
    resultado = true;  
  }
  return resultado;
}

// Forma de declarar o if/else 3
function numeroPositivo(num) {
  const ehNegativo = num < 0;

  if(ehNegativo) { 
    return false; 
  } 
  
  return true;
}

// JavaScript "NÂO TEM ELSEIF", as palavras sempre estão espaçadas!!!
function numeroPositivo(num) {
  const ehNegativo = num < 0;
  const maiorQueDez = num > 10;

  if(ehNegativo) {
    return "Esse número é negativo!";
  } else if (!ehNegativo && maiorQueDez) {
    return "Esse número é positivo e maior que 10!"
  }
  return "Esse número é positivo!";
}

console.log(numeroPositivo(2)) // "Esse número é positivo!"
console.log(numeroPositivo(-2)) // "Esse número é negativo!"
console.log(numeroPositivo(40)) // "Esse número é positivo e maior que 10!"


// SWITCH/CASE
/*
- Equivale a uma comparação de tipo e valor (===)
- Sempre precisa de um valor "default"
- Ideal para quando se precisa comparar muitos valores
 */

function getAnimal(id) {
  switch(id) {
    case 1:
      return "cão";
    case 2:
      return "gato"; 
    case 3:
      return "pássaro"; 
    default:
      return "peixe";    
  }
}

getAnimal(1) // cão

getAnimal(4) // peixe

getAnimal("1") // peixe