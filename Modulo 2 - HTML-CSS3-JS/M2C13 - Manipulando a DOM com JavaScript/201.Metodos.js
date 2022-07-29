// 1. Métodos
// 1.1. Estrutura HTML
/*
<html>
<head>
  <title>Document</title>
</head>
<body> //**TAG**
  <h1 id="titulo">Minha página</h1> //**ID**

  <section class="'textos">
    <h2>Sobre mim</h2>
    <p>Texto sobre a pessoa aqui</p>
  </section>

  <section class="'textos"> // **CLASS**
    <h2>Meus projetos</h2>
    <ul>
      <li>P1</li>
      <li>P2</li>
      <li>P3</li>
    </ul>>
  </section>
</body>
</html>
*/

// 1.2. Selecionando os elementos de uma página
// 1.2.1. getElement


document.getElementById('titulo'); 
// <h1 id="titulo">Minha pagina><h1>

document.getElementsByTagName('li');
/*
[
        <li>P1</li>
      <li>P2</li>
      <li>P3</li>
]
*/

document.getElementsByClassName('textos')
/*
[
  <section class="'textos">
    <h2>Sobre mim</h2>
    <p>Texto sobre a pessoa aqui</p>
  </section>

  <section class="'textos"> // **CLASS**
    <h2>Meus projetos</h2>
    <ul>
      <li>P1</li>
      <li>P2</li>
      <li>P3</li>
    </ul>>
  </section>
]
*/

// 1.2.2. querySelector

// Estrutura HTML
/*
<html>
  <head>
    <title>Exemplo querySelectorAll</title>
  </head>
  <body> 
    <div class="primeira-classe segunda-classe">
      <ul>
        <li class="opcao">opcao 1</li>
        <li class="opcao">opcao 2</li>
        <li class="opcao">opcao 23/li>
      </ul>>
    </div>
  </body>
</html>
*/

document.querySelectorAll('.primeira-classe .segunda-class');
/*
[
      <div class="primeira-classe segunda-classe">
      <ul>
        <li class="opcao">opcao 1</li>
        <li class="opcao">opcao 2</li>
        <li class="opcao">opcao 23/li>
      </ul>>
    </div>
]
*/

document.querySelectorAll('.primeira-classe .segunda-class');
/*
[
        <li class="opcao">opcao 1</li>
        <li class="opcao">opcao 2</li>
        <li class="opcao">opcao 23/li>
]
*/

// 2. Adicionar e deletar
/*
Método                            | Descrição
document.createElement(element)   | Cria um novo elemento HTML
document.removeChild(element)     | Remove um elemento
document.appendChild(element)     | Adiciona um elemento
document.replaceChild(new, old)   | Substitui um elemento
*/