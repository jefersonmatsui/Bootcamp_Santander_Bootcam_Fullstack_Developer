// 1.Tipos

// 1.1. Eventos do mouse
// - mouseover, mouseout

// 1.2. Eventos de click
// - click, dbclick

// 1.3. Eventos de atualização
// - Change, load

// 2. Acionando eventos

// 2.1. Event listener
/*
Diretamente no Javascript, cria um evento que vai ser acionado no momento 
em que o usuário realizar determinada ação.
*/

// Exemplo 1:
const botao = document.getElementById("meuBotao");
botao.addEventListener("click", outraFuncao);

// 2.2 Atributo HTML
/*
Especifica a função a ser chamada diretamente no elemento HTML.

<html>
<body>

<h1 onclick="mudaTexto">Clique aqui!</h1>

<script>
  function mudaTexto(id) {
    id.innerHTML = "Mudei!";
  }
</script
</body>
</html>
*/