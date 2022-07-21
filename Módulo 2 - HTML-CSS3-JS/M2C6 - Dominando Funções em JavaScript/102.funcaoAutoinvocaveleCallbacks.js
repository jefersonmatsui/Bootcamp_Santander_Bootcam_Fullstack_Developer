// FUNÇÃO AUTOINVOCÁVEL
// IIFE (Immediately Invoked Function Expression)

(
  function() {
    let name = "Digital Innocation One"
    return name;
  }
)();
// Digital Innovation One


/*Uma função anônima entre pararênteses, 
seguida por outro par de parênteses, 
que representa sua chamada*/


(
  function(a, b) {
    return a + b;
  }
)(1, 2); 
// 3


const soma3 = (
  function() {
    return a + b;
  }
)(1, 2); 
console.log(soma3) // 3

/*Também pode ser utilizada com parâmetros
ou armazenada em uma variável.*/

// CALLBACKS
// Uma função passada como argumento para outra

const calc = function(operacao, num1, num2){
  return operacao(num1, num2);
}

const soma = function(num1, num2){
  return num1 + num2;
}

const sub = function(num1, num2){
  return num1 - num2;
}

const resultSoma = calc(soma, 1 ,2);
const resultSub = calc(sub, 1, 2);

console.log(resultadoSub); // -1
console.log(resultadoSoma); // 3

// Utilizando callbacks, você tem maior controle da ordem de chamadas.