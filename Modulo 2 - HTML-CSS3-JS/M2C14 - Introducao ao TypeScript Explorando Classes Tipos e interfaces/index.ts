// 1. Escrevendo a função soma com TypeScript
/*
function soma(a: number, b: number){
  return a + b;
}
*/
// 2. Como Funciona as interfaces

// types
// interfaces
/*
interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
  executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

const animal: IAnimal = {
  nome: 'Elefante',
  tipo: 'terrestre',
  executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}db`)
}

animal.executarRugido('s')

const felino: IFelino = {
  nome: 'Leão',
  tipo: 'terrestre',
  visaoNoturna: true
}
*/
/*
// 3. Como funciona os types
interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
  domestico: boolean;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'médio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
  domestico: true,
  nome: 'cachorro',
  porte: 'médio',
  tipo: 'terrestre',
  visaoNoturna: true
}
*/

// 4.Tratando a tag input
// HTMLElement
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value)
});