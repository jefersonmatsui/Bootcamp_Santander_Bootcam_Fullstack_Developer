/*
let person = {
  name: 'John'
  age: 20
};
*/

let obj = {}
typeof obj; // object

obj.name = "Julia"
obj; // {name: "Julia"}

obj.age = 20
obj; // {name: "Julia", age: 20}

Object.values(obj); // ["Julia", 20]
Object.keys(obj); // ["name", "age"]

let person = {
  name: "Julia",
  age: 20,
  adress: "Rua 2"
}
person; // {name: "Julia", age: 20, adress: "Rua 2"}

person.name; // "Julia"
person["name"] // "Julia"

person["numberOfSiblings"] = 3
person; // {name: "Julia", age: 20, adress: "Rua 2", numberOfSiblings: 3}

let mom = "nameOfMom"
person[mom] = "Maria"
person; // {name: "Julia", age: 20, adress: "Rua 2", numberOfSiblings: 3, nameOfMom: "Maria"}


