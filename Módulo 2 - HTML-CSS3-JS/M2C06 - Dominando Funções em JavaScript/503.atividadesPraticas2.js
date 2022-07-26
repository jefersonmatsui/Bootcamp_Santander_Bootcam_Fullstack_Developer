/*
Atividade 2: This
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. 
Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
*/

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
  nome: "Maria",
  idade: 30,
}

const pessoa2 = {
  nome: "Carla",
  idade: 26,
}

const animal1 = {
  nome: "Fiona",
  idade: 5,
  raca: "Pug",
}

console.log(calculaIdade.call(pessoa2, 30))
console.log(calculaIdade.call(animal1, 7))
console.log(calculaIdade.apply(pessoa1, [4]))
console.log(calculaIdade.apply(animal1, [4]))