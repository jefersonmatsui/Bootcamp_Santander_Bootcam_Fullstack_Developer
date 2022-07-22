//  ARROW FUNCTIONS

// Exemplo 1.
const helloWorld = function() {
  return "Hello World";
}

// Exemplo 1.1.
const helloWorld1 = () => {
  return "Hello World";
}

// Exemplo 1.2.
const helloWorld2 = () => "Hello World";

/*
- Caso exista apenas uma linha. pode dispensaras chaves e o return.
- Caso exista apenas um parâmetro, pode dispensar os parênteses
- Arrow function "NÃO" faz hoisting!
*/

//Exemplo 2
const soma = (a, b) => a + b;

soma(4, 6); // 10

//Exemplo 2.1
const soma1 = a => a;

soma1(4); // 4

// OUTRAS RESTRIÇÔES

/*
- "this" sempre será objeto global. Métodos para modificar seu valor não irão funcionar;
- Não existe o o bjeto "arguments";
- O construtur (ex: new MeuObjeto()) também não pode ser utilizado.
)
*/
