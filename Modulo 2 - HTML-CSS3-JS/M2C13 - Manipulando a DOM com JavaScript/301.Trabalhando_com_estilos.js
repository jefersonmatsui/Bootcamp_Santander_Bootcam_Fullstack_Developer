// 1. Classes
// 1.1. Element.classList

/* HTML
<div id="meu-elemento" class="classe">
  <!-- resto do código aqui -->
</div>
*/

const meuElemento = document.getElementById("meu-elemento")

meuElemento.classList.add("novo-estilo");
// Adiciona a classe "meu estilo"

meuElemento.classList.remove("classe")
// Remove a classe "classe"

meuElemento.classList.toggle("dark-mode")
// Adiciona a classe "dark-mode" caso ela não faça parte da lista e remove ela caso faça

/* HTML
<div id="meu-elemento" class="novo-estilo dark mode">
  <!-- resto do código aqui -->
</div>
*/

// 2. CSS
// 2.1. Acessando diretamente o CSS de um elemento

document.getElementsByTagName("p").style.color = "blue";