/* Map
Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro 
'this' de um objeto criado por você. */

const pineapple = {
  value: 2,
}

const orange = {
  value: 3,
}

function mapComThis(array, thisArg) {
  return array.map(function (item) {
    return item * this.value;
  }, thisArg)
}

const nums = [1, 2];

console.log('this -> pineapple', mapComThis(nums, pineapple));

console.log('this -> orange', mapComThis(nums, orange));