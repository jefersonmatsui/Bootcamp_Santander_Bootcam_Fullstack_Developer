// 1. Throw

// 1.1. Sem Throw

function verificaPalindromo(string) {
  if (!string) return "String inválida";

  return string === string.split('').reverse().join('');
}

verificaPalindromo('cat'); // Retorna "String inválida"

// 1.2. Com Throw

function verificaPalindromo(string) {
  if (!string) throw "String inválida";

  return string === string.split('').reverse().join('');
}

verificaPalindromo('cat'); // Retorna mensagem de erro: Uncaught String inválida

// 2. Try...catch


// Exemplo 1:
function verificaPalindromo(string) {
  if (!string) throw "String inválida";

  return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
  try {
    verificaPalindromo(string);
  }
  catch(e) {
    console.log(e)
  }
}

tryCatchExemplo(''); // Retorna String inválida (sem aspas, não é uma string, e sim um log do console)

// Exemplo 2:
function verificaPalindromo(string) {
  if (!string) throw "String inválida";

  return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
  try {
    verificaPalindromo(string);
  }
  catch(e) {
    throw(e)
  }
}

tryCatchExemplo(''); // Retorna Uncaught String inválida (sem aspas, não é uma string, e sim um log do console)

// 3. Finally


// Exemplo 1:
function verificaPalindromo(string) {
  if (!string) throw "String inválida";

  return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
  try {
    verificaPalindromo(string);
  }
  catch(e) {
    throw(e)
  }
  finally {
    console.log('A string enviada foi: ' + string);
  }
}

tryCatchExemplo('');

// (Envia um string vazia e uma mensagem de erro)
// A String enviada foi:
// mensagem de erro: Uncaught String inválida

// Exemplo 2:
function verificaPalindromo(string) {
  if (!string) throw "String inválida";

  return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
  try {
    verificaPalindromo(string);
  }
  catch(e) {
    throw(e)
  }
  finally {
    console.log('A string enviada foi: ' + string);
  }
}

tryCatchExemplo('ala');

// A String enviada foi: ala
// true