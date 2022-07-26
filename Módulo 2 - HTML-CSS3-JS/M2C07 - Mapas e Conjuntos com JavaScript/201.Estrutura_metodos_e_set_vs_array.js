// ESTRUTURA

/*
- Sets são estruturas que armazenam apenas valores únicos
*/

const myArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2, 1];
const mySet = new Set(myArray); // {1, 2, 3, 4, 5, ...}


// MÉTODOS

/*
- Adicionar, ler e deletar
*/

const mySet1 = new Set();

mySet1.add(1);
mySet1.add(5);

mySet1.has(1); // true

mySet1.has(3); // false

mySet1.delete(5);

// SET vs ARRAY

/*
- Possui valores únicos;
- Em vez da propriedade length, consulta-se o número de registros pela propriedade size;
- Não possui os métodos map, filter, reduce etc.
*/