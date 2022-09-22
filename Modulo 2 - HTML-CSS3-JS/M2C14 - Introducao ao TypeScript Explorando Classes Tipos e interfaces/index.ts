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

/*
// 4.Tratando a tag input
// HTMLElement
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value)
});
*/


// 5. O que são Generic types
/*
function  adicionaApendiceALista<NaoSei>(array: any[],  valor: NaoSei) {
  return array.map(() => valor);
}

adicionaApendiceALista(['A', 'B', 'C'], 'd')
*/

/*
// 6. Desenvolvendo condicionais a partir de parâmetros
interface IUsuario {
  id: string;
  email: string;
}

interface IAdmin extends IUsuario{
  cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
  if ('cargo' in usuario) {
    // redirecionar para a área de administração
  }
}
  // redirecionar para a área do usuário
*/

/*
// 7. Utilizando o caractere "?" para varáreis opcionais
interface IUsuario {
  id: string;
  email: string;
  cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecione(usuario: IUsuario) {
  if(usuario.cargo) {
    // redirecionar(usuario.cargo);
  }

  // redirecionar para a área de usuário
}
*/

/*
// 8. Criando variáveis com propriedades readonly e private
interface Cachorro {
  nome: string;
  idade: number;
  parqueFavorito ?: string;
}

type CachorroSomenteLeitura = {
  +readonly [K in keyof Cachorro] - ?: Cachorro[K];
}

class meuCachorro implements Cachorro {
  nome;
  idade;
  parqueFavorito;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new meuCachorro('Apolo', 14);
cao.idade = 8;
*/

// 9. Como importar bibliotecas com typescript
/*
import $ from 'jquery';

$.fn.extend({
  novaFuncao() {
    console.log('Chamou nova chamada')
  }
});

$('body').novaFuncao(); 
*/
/*
export const numero = 2;
*/

