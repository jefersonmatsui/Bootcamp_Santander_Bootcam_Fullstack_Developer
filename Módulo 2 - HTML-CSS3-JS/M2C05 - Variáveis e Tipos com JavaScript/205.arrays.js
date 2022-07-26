/*
Lista iterável de elementos
*/

let array = []
// let array = new array[]
array.push(3); // 1 ... retorna o tamanho da lista
array; // 3
array.push(2); //coloca o número no final da lista
array; // [3, 2]
array.pop(); // Tira o último número

array.push(2); 
array.push(5); 
array.shift(); // Tira o primeiro elemento
array; //[2, 5] 
array.unshift(1) // Coloca o número no começo da lista
array; //[1, 2, 5]

for(let i = 0; i < array.length; i++) {
console.log(array[1]);
}
/*
1
2
5
*/

array.includes(3); // false
array.every(item => item === 5); // false
array.some(item => item === 5); // true
array.reverse(); // [5, 2, 1]