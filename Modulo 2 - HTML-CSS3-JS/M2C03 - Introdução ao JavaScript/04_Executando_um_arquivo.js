/* 
Google Chrome
crtl + shift + i ou clicando com o botão direito do mouse selecionar 'inspecionar
Aba Console */

/* instalando node.js */
/* no terminal usando o comando 'ls', vejo o que tem na minha pasta, 
escolha o arquivo usando o comando 'node (nome do arquivo)' exemplo: $ node 04_Executando_um_arquivo.js */

console.log("Hello world!");

// Exemplo para testar
function returnEvenValues(array) {
  let evenNums = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNums.push(array[i]);
    } else {
      console.log(`${array[i]} não é par`) 
    }
  }
  console.log('Os números pares são:', evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array)