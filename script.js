let corAtualSelecionada = 'black';

function trataCor(event) { //
  let divSelecionada = document.querySelector('.selected');
  let divAtual = event.target;

  divSelecionada.classList.remove('selected');
  divAtual.classList.add('selected');
  corAtualSelecionada = window.getComputedStyle(divAtual, null).getPropertyValue('background-color');
}
// Obtive ajuda de Dilenio Enderle
function criaPaleta(colors) {
  const selecionarPaleta = document.getElementById('color-palette');

  for (let i = 0; i < colors.length; i += 1) {
    let criarDiv = document.createElement('div');
    criarDiv.style.backgroundColor = colors[i];
    criarDiv.className = 'color';
    if (colors[i] === 'black') {
      criarDiv.classList.add('selected');
    }
    criarDiv.addEventListener('click', trataCor);

    selecionarPaleta.appendChild(criarDiv);
  }
}
// Obtive ajuda de Dilenio Enderle
function handlePixel(event) {
  let colorirDiv = event.target;
  colorirDiv.style.backgroundColor = corAtualSelecionada;
}
// Obtive ajuda de Dilenio Enderle
function criaQuadro(size) {
  for (let index = 0; index < size; index += 1) {
    let quadroDePixel = document.getElementById("pixel-board");
    let criarPixel = document.createElement('div');
    let classeDaLinha = `row-board${index}`;
    criarPixel.className = classeDaLinha;
    quadroDePixel.appendChild(criarPixel);

    for (index2 = 0; index2 < size; index2 += 1) {
      let linhaDoQuadro = document.getElementsByClassName(classeDaLinha)[0];
      let pixelDaDiv = document.createElement('div');
      pixelDaDiv.className = 'pixel';
      pixelDaDiv.addEventListener('click', handlePixel);
      linhaDoQuadro.appendChild(pixelDaDiv);
    }
    quadroDePixel.appendChild(criarPixel);
  }
}
// Obtive ajuda de Dilenio Enderle
function limpaQuadro() {
  let clear = document.querySelector('#clear-board');
  clear.addEventListener('click', function () {
    let pixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = 'white';
    }
  });
}

window.onload = function () {
  criaPaleta(['black', 'red', 'blue', 'yellow']);
  limpaQuadro();
  criaQuadro(5);
};
