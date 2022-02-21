let corAtualSelecionada = 'black';

function trataCor(event) {
  const divSelecionada = document.querySelector('.selected');
  const divAtual = event.target;

  divSelecionada.classList.remove('selected');
  divAtual.classList.add('selected');
  corAtualSelecionada = window.getComputedStyle(divAtual, null).getPropertyValue('background-color');
}
// 
function criaPaleta(colors) {
  const selecionarPaleta = document.getElementById('color-palette');

  for (let i = 0; i < colors.length; i += 1) {
    const criarDiv = document.createElement('div');
    criarDiv.style.backgroundColor = colors[i];
    criarDiv.className = 'color';
    if (colors[i] === 'black') {
      criarDiv.classList.add('selected');
    }
    criarDiv.addEventListener('click', trataCor);

    selecionarPaleta.appendChild(criarDiv);
  }
}
//
function tratarPixel(event) {
  const colorirDiv = event.target;
  colorirDiv.style.backgroundColor = corAtualSelecionada;
}
//
function criaQuadro(size) {
  for (let index = 0; index < size; index += 1) {
    const quadroDePixel = document.getElementById("pixel-board");
    const criarPixel = document.createElement('div');
    const classeDaLinha = `row-board${index}`;
    criarPixel.className = classeDaLinha;
    quadroDePixel.appendChild(criarPixel);

    for (i = 0; i < size; i += 1) {
      const linhaDoQuadro = document.getElementsByClassName(classeDaLinha)[0];
      const pixelDaDiv = document.createElement('div');
      pixelDaDiv.className = 'pixel';
      pixelDaDiv.addEventListener('click', tratarPixel);
      linhaDoQuadro.appendChild(pixelDaDiv);
    }
    quadroDePixel.appendChild(criarPixel);
  }
}
//
function limpaQuadro() {
  const clear = document.querySelector('#clear-board');
  clear.addEventListener('click', function () {
    const pixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = 'white';
    }
  });
}

//  10 Bônus
// let input = document.querySelector('#crieSeuQudro');
// let btnCriarQuadro = document.getElementById('btnCriarQuadro');

// btnCriarQuadro.addEventListener('click', function () {
//   let tamanhoQuadro = Number(input.value)
//   usuarioCriando(tamanhoQuadro)
// });

// function usuarioCriando(size) {
//   if (number > 5 && number < 50) {

//   }

// }




window.onload = function () {
  criaPaleta(['black', 'red', 'blue', 'yellow']);
  limpaQuadro();
  criaQuadro(5);
};
