// PARÂMETROS

array.filter(callback, thisArg)
callback(item, index, array)

// Callback: função a ser executada em cada elemento;
// thisArg (opcional): o valor de 'this' dentro da função de callback

// Exemplo

const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];
frutas.filter((fruta) => fruta.includes('maçã')) // ['maçã fuji', 'maçã verde'];