// Map

/*
- Cria um novo array
- Não modifica o array original
- Realiza as operações em ordem
*/

//SINTAXE

array.map(callback, thisArg)
callback(item, index, array)

// Callback: função a ser executada em cada elemento;
// thisArg (opcional): o valor de 'this' dentro da função de callback

// MAP VS forEach

// Usando map
const array = [1, 2, 3, 4, 5];
array.map((item) => item * 2); // retorno: [2, 4, 6, 8, 10]

// Usando forEach
const array1 = [1, 2, 3, 4, 5];
array1.forEach((item) => item * 2); // retorno: undefined

/*
- Valor de retorno;
- Considere se o array auxiliar será necessário;
*/