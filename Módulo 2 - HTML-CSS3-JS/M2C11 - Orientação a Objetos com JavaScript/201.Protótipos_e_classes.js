// 1. Protótipos
/*
- Todos os objetos Javascript herdam propriedades e métodos de um prototype.
- O objeto Object.prototype está no topo desta cadeia.

Cadeia de protótipos (prototype chain)

crow
  Bird
    Animal.constructor
      function
        Function.prototype.constructor
          Object() {}
            Object.prototype = null;
*/

// 2. Classes
/* (não existe em JS)
- Syntatic sugar: uma sintaxe feita para facilitar a escrita
*/

// Antes do JS6

var Meal = function(food) {
  this.food = food
}

Meal.prototype.eat = function() {
  return '=)'
}

// Apartir do JS6
class Meal {
  constructor (food) {
    this.food = food
  }

  eat() {
    return '=)'
  }
}

/*
- Javascript não possui classes nativamente. Todas as classes são objetos e a herança se dá por protótipos.
*/