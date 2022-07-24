// ESTRUTURAS

/*
Características:
- Uma coleção de arrays no formato [chave, valor];
- Pode iterado por um loop for...of
*/

const myMap = new Map()

// MÉTODOS

/*
- Adicionar, ler e deletar
*/

const myMap1 = new Map()

myMap1.set('apple', 'fruit'); // Map(1) {"apple" => "fruit"}
myMap1.get(apple); // "fruit"
myMap1.delete("apple"); // true
myMap1.get("apple"); // undefined

//  MAP vs OBJETO
/*
- Maps podem ter chaves de qualquer tipo;
- Maps possuem a propriedade length;
- Maps são mais fáceis de iterar;
- Utilizado quando o valor das chaves é desconhecido;
- Os valores tem o mesmo tipo.
*/


