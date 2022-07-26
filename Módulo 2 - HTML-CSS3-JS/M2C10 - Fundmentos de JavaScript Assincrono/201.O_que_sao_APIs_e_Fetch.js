// 1. O que são APIs
/*
Application Programming Interface

- Uma API é uma forma de intermediar os resultados do back-end 
com o que é apresentado no front-end.
- Você consegue acessá-la por meio de URLs.

JSON: JavaScript Object Notation
- É muito comum que APIs retornem seus dados no formato .json, 
portanto precisamos tratar esses dados quando recebemos
*/

/* bank.json
  {
    "description": "schema POST bank",
    "type": "object",
    "properties": {
    "id": {
      "type": "number",
      "minium": 0
    },
    "code": {
      "type": "string"
    },
    "name": {
      "type": "string"
    }
  }
}
*/


// 2. fetch
// Consumindo APIs

fetch(url, options)
  .then(reponse => reponse.json())
  .then(json => console.log(json))
// retorna uma Promise


// Exemplo 1

fetch('https://endereco-api.com/', {
  method: 'GET',
  cache: 'no-cache',
})
  .then(reponse => reponse.json())
  .then(json => console.log(json))
// retorna uma Promise

// Exemplo 2

fetch('https://endereco-api.com/', {
  method: 'POST',
  cache: 'no-cache',
  body: JSON.stringify(data)
})
  .then(reponse => reponse.json())
  .then(json => console.log(json))
// retorna uma Promise


