/*
Atividade: Light Mode/Dark Mode
1. Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
2. Copie o HTML e o CSS deste repositório
3. Crie um arquivo chamado scripts.js na sua pasta assets/js
4. Selecione os elementos: h1, button, footer e body
5. Se os elementos possuirem a classe dark-mode, modifique seus estilos. 
Caso contrário, volte os estilos para o original
*/

function changeMode() {
  changeClasses();
  changeText();
}

function changeClasses() {
  button.classList.toggle(darkModeClass);
  h1.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);
}

function changeText() {
  const lightMode = "Light Mode";
  const darkMode = "Dark Mode";

  if(button.classList.contains(darkModeClass)) {
    button.innerHTML = lightMode;
    h1.innerHTML = darkMode + " ON";
    return;
  }

  button.innerHTML = darkMode;
  h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode'
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);

