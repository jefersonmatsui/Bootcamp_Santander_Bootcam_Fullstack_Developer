// 1. O objeto Error

// 1.1. Código
new Error(message, fileName. lineNumber) 
// todos os parâmetros são opcionais
const MeuErro = new Error('Mensagem Inválida');
throw MeuErro; 
/* Resultado: Uncaught Error: Mensagem inválida ar <anonynous>:1:17 */

// 1.2. o Erro pode ter um nome

const MeuErro1 = new Error('Mensagem Inválida');
MeuErro1.name = 'InvalidMessage';

throw MeuErro1; 
/* Resultado: Uncaught InvalidMessage: Mensagem inválida at <anonynous>:3:17 */

// 2. Testando no console

/*

> MeuErro.Name
<- "InvalidMessage"
> MeuErro.stack // stack === pilha
<- "InvalidMessage> Mensagem Inválida\n at <anonymous>:3:17"
> MeuErro
<- InvalidMessage: Mensagem inválida at <anonynous>:3:17

*/