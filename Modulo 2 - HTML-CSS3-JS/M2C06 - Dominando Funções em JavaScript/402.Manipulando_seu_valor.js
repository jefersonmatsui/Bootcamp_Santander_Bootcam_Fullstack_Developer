// MÉTODO "CALL"

// Exemplo 1
const pessoa = {
  nome: "Miguel",
};

const animal = {
  nome: "Murphy",
};

function getSomething() {
  console.log(this.nome);
}

getSomething.call(pessoa); // Miguel

// Exemplo 2
const pessoa1 = {
  nome: "Miguel",
};

const animal1 = {
  nome: "Murphy",
};

function getSomething() {
  console.log(this.nome);
}

getSomething.call(animal1); // Murphy

// Exemplo 3
// É possível passar parâmetros para essa função separando-os por vírgulas.

const myObj = {
  num1: 2,
  num2: 4,
};

function soma(a, b) {
  console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5); // 12

// MÉTODO "APPLY"

// Exemplo 1
const pessoa2 = {
  nome: "Miguel",
};

const animal2 = {
  nome: "Godi",
};

function getSomething() {
  console.log(this.nome);
}

getSomething.apply(pessoa); // Miguel

// Exemplo 2
const pessoa3 = {
  nome: "Miguel",
};

const animal3 = {
  nome: "Godi",
};

function getSomething() {
  console.log(this.nome);
}

getSomething.apply(animal3); // Godi

// Exemplo 3
// É possível passar parâmetros para essa função dentro de um array.

const myObj1 = {
  num1: 2,
  num2: 4,
};

function soma(a, b) {
  console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, [1, 5]); // 12

// MÉTODO "BLIND"
// Clona a estrutra da função onde é chamda e aplica o valor do objeto passado como parâmetro.

const retornaNomes = function () {
  return this.nome;
};

let bruno = retornaNomes.blind({ nome: 'Bruno' });
bruno(); // Bruno
