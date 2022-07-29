// strings
/*
const DIO = 'Digital Innovation One';

let firstName = 'João';
let lastName =  'Luiz';

let fullName= `Nome completo: ${firstName} ${lastName}`;

- Comumente utilizada para textos;
- Valores declarados entre aspas ou crases;
*/

// Console do Google Chrome

let nome = "João";
nome; // "João"
let sobrenome = "Pedro";
typeof nome; //"string"
nome.concat(sobrenome); // "JoãoPedro"
let concatenado = nome.concat(sobrenome);
typeof concatenado; // "string"
concatenado.length; // 9
let exemplo = new String('blablabla')
typeof exemplo; // "object"
exemplo /* String {blablabla} 
0: "b";
1: "l";
2: "a";
3: "b";
4: "l";
5: "a";
6: "b";
7: "l";
8: "a";
length: 9 */
let vazio = "";
typeof vazio; //"string";

nome; // "João"
nome[1]; // "o"
nome.length; // 4

concatenado; // "JoãoPedro"
concatenado = nome + " " + sobrenome; // "João Pedro"
concatenado = nome + "\n" + sobrenome; 
/* 
"João 
Pedro"
*/

concatenado = nome + "\n\n" + sobrenome; 
/* 
"João 

Pedro"
*/

concatenado = `${nome} ${sobrenome}`; // "João Pedro"


concatenado = `${nome} 

${sobrenome}`;
/* 
"João 

Pedro"
*/

concatenado = "\""; // """ colocando a barra, podemos colocar aspas na string

let frase = "Olá, tudo bem?";
frase.split(""); // ["O", "l", "á" ,"," " ", "t", "u", "d", "o", " ", b", "e", "m", "?"]
frase.split(" "); // ["Olá, ", "tudo", "bem?"]
frase.includes("tudo"); // true
frase.startsWith("O"); // true
frase.startsWith("R"); // false
frase.endsWith("?"); // True
frase.replace(",", "!"); // "Olá! tudo bem?"
let stringModificada = frase.replace(",", "!");
frase; // "Olá, tudo bem?"
stringModificada; // "Olá! tudo bem?"


/*
MÉTODOS IMPORTANTES
- Concatenação;
- Propriedade length;
- Iterabilidade;
- Formatação;
*/