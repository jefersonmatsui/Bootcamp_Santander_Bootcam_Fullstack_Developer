// 1. Assincronicidade

// 1.1. Definição
/* 
- Assíncrono = 'Que não ocorre ou não se efetiva aoa mesmo tempo';
- O JS roda de maneira "Síncrona";
*/

// 2. Promises
/*
- Objeto de processamento assíncrono;
- Inicialmente, seu valor é desconhecido. Ela pode, então ser resolvida ou rejeitada.
- Uma promise pode ter 3 estados:
  a) Pending;
  b) Fulfilled;
  c) Rejected.
*/

// 2.1. Estrutura
// Exemplo 1:
const myPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve(console.log('Resolvida'));
  }, 2000);
});

await myPromise
  .then((result) => result + ' passando pelo then')
  .then((result) => result + ' e agora acabou')
  .catch((err) => console.log(err.message));

// Após 2 segundos, retornará o valor
// "Resolvida passando pelo then e agora acabou"  

// 3. Async/await
/* Funções assíncronas precisam dessas duas palavras chave */

// Exemplo 1

async function resolvePromise() {
  const myPromise1 = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('Resolvida');
    }, 3000);
});

const resolved = await myPromise1
  .then((result) => result + ' passando pelo then')
  .then((result) => result + ' e agora acabou')
  .catch((err) => console.log(err.message));

  return resolved;
}

/* Resposta do console
> resolvePromise()
<- Promise {<pending>}

> await resolvePromise()
"Resolvida passando pelo then e agora acabou!"
*/

// Exemplo 2: Utilizando try...catch

async function resolvePromise() {
  const myPromise2 = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('Resolvida');
    }, 3000);
});

let result;

  try {
  result = await myPromise2
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou')
  } catch(err) {
    result = err.message;
  } 

  return result;
}