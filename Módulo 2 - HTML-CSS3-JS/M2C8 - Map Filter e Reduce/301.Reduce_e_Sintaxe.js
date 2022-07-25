// REDUCE

// Executa uma função em todos os elementos do array, retornando um valor único.

// SINTAXE
array.reduce(callbackFn, initialValue)

/*
- Callback: função a ser executada a partir do acumulador;
- initialValue: valor sobre o qual o retorno final irá atuar.
*/

const callbackFn = function(accumulador, currentValue, index, array) {
  // do something
}

array.reduce(callbackFn, initialValue)

/*
- Accumulator/preValue: acumulador de todas as chamadas de callbackFn
- currentValue: elemento atual sendo acessado pela função
*/