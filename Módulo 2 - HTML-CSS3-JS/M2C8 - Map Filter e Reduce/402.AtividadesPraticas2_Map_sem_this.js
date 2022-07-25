/* Map
Pratique a sintaxe de multiplicação de números, não utilizando o parâmetro 
'this'*/

function mapSemThis(arr) {
  return arr.map(function (item) {
    return item * 2;
  });
}

const nums = [2, 4, 6, 7, 10];

console.log(mapSemThis(nums)); 
console.log(nums); // o array não mudou 