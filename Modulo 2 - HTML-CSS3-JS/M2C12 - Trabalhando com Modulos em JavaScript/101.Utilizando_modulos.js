// 1. O que são módulos?
/*
- Módulos arquivos JS que tem a capacidade de exportar e importar
informações de outros arquivos do mesmo tipo

- Algumas vantagens são:
  - Organização do código;
  - Compartilhamento de variáveis em escopos diferentes;
  - Explicita as dependências dos arquivos.
*/

// 2. Exportar
// 2.1.Name exports
// Exemplo 1:
export function mostrarIdade(pessoa) {
  return `A idade de ${pessoa.nome} é ${pesssoa.idade}`;
}

export function mostrarCidade(pessoa) {
  return `A idade de ${pessoa.nome} é ${pesssoa.cidade}`;
}

export function mostrarHobby(pessoa) {
  return `A idade de ${pessoa.nome} é ${pesssoa.hobby}`;
}

// Exemplo 2:
function mostrarIdade(pessoa) {
  return `A idade de ${pessoa.nome} é ${pesssoa.idade}`;
}

function mostrarCidade(pessoa) {
  return `A idade de ${pessoa.nome} é ${pesssoa.cidade}`;
}

function mostrarHobby(pessoa) {
  return `A idade de ${pessoa.nome} é ${pesssoa.hobby}`;
}

export {
  mostrarIdade,
  mostrarCidade,
  mostrarHobby
}

// 2.2. Default exports

function mostrarIdade(pessoa) {
  return `A idade de ${pessoa.nome} é ${pesssoa.idade}`;
}

function mostrarCidade(pessoa) {
  return `A idade de ${pessoa.nome} é ${pesssoa.cidade}`;
}

function mostrarHobby(pessoa) {
  return `A idade de ${pessoa.nome} é ${pesssoa.hobby}`;
}

export {
  mostrarIdade,
  mostrarCidade,
}

export default mostrarHobby;

/*
- Só pode haver um por arquivo;
- Será o retorno padrão do seu arquivo.
*/

// 3. Importar

// 3.1. Named exports
import{funcao, variavel, classe} from './arquivo.js'

// 3.2. Default exports
import calorDefault from './arquivo.js'

// 3.3. Trocando nome de imports
import {arquivo as Apelido} from './arquivo.js';
Apelido.metodo();

// 3.4. Importando todos os dados de um arquivo
import * as INFOS from './arquivo.js';
INFOS.metodoA();
console.log(INFOS.variavel);

// 4. Vinculando ao HTML
<script type="module" src="./main.js"></script>
/*
- Para fazer testes localmente (de um arquivo no seu computador),
será necessário estar rodando um servidor. Isso pode ser feito
utilizando a extensão "Live Server", do VSCode.
*/


// 5. Curiosidades
/*
- Módulos sempre estão em "strict mode";
- Podem ser utilizadas as extensões .js e .mjs;
- Para testes locais, é necessário utilizar um servidor;
- Ao importar, sempre lembre da extensão (.js, .mjs);
- Ao importar, sempre utilize "./" como ponto de partida
*/