/*
- Declarada em SNAKE_UPPER_CASE;
- Escopo de bloco;
- Não faz hoisting;
*/ 

/* Exemplos 1
const DAYS_IN_A_WEEK = 7;
const MY_NAME = 'Kirian';
*/

/* Exemplo 2
const FIRST_NAME = "Jeferson";
FIRST_NAME = "João"; // Não pode retribuir uma constante

const FIRST_NAME = "Jeferson";
const FIRST_NAME = "João"; // Não pode redeclarar uma constante;
*/

/* Exemplo 3
const FIRST_NAME; // Sempre declarar a constante antes
FIRST_NAME = "Jeferson"; // Não é possível, pois foi uma tentativa de redistribuição
console.log(FIRST_NAME);
*/

const FIRST_NAME = "Jeferson";
console.log(FIRST_NAME);

