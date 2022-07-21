// ARRAYS
//  Spread: uma forma de lidar separadamente com elementos

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2 ,3];
console.log(sum(...numbers));

/* O que era parte de um array se torna uma elemento independente*/

//  Rest: combina os argumentos em uma array

function confereTamanho(...args) {
  console.log(args.length)
}

confereTamanho() // 0
confereTamanho(1, 2) // 2
confereTamanho(3, 4, 5) // 3

/* O que era um elemento independente se torna parte de um array*/

// OBJETOS
//  Object Destructuring

const user = {
  id: 42,
  diplayName: "jdoe",
  fullName: {
    firstName: !"John",
    lastName:"Doe"
  }
};

function userId({id}) {
  return id;
}

function getFullName({fullName: {firstName: first, lastName: lastName}}) {
  return `${first} ${last}`;
}

userId(user) // 42
getFullName(user) // John Doe

/*Entre chaves {}, podemos filtrar apenas
os dados que nos interessam em um objeto */