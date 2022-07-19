/* Atividades 1
- Crie uma função que recebe dois números como parâmetros.
- Confira se os números são iguais.
- Confira se a soma dos números é maior que 10 ou menor que 20.
- Retorne uma string dizendo "Os números num1 e num2 não/são iguais. 
Sua soma é soma, que é maior/menor que 10 e maior/menor que 20". 

Exemplo:
Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.

// Normal
function compararNumeros(num1, num2) {
  const saoIguais = num1 === num2;
  const soma = num1 + num2;

  if(saoIguais) {
    return "São iguais";
  }

  return "Não são iguais";
}

// if ternário
function compararNumeros(num1, num2) {
  const saoIguais = num1 === num2;
  const soma = num1 + num2;

  return saoIguais ? "São iguais" : " Não são iguais";
}  */

function compararNumeros(num1, num2) {
  if(!num1 || !num2) return 'Defina dois números!'

  const primeiraFrase = criaPrimeiraFrase(num1, num2);
  const segundaFrase = criaSegundaFrase(num1, num2);

  return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
  let saoIguais = '';

  if(num1 !== num2) {
    saoIguais = "não";
  }

  return  `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(num1, num2) {
  const soma = num1 + num2;
  
  let resultado10 = 'menor'; 
  let resultado20 = 'menor';

  const compara10 = soma > 10;
  const compara20 = soma > 20;

  if(compara10) {
    resultado10 = 'maior';
  }

  if(resultado20) {
    resultado20 = 'maior';
  }

  return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

console.log(compararNumeros(10, 20));
