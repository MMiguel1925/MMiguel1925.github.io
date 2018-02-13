/*
* CMS - fevereiro 2018
* Este é um exemplo de código em Javascript, que foi retirado da seguinte página:
* https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
*/
//var meuHeading = document.querySelector('h1');
//meuHeading.innerHTML = 'Olá Mundo!';
// Comentário: altera a tag <h1> para 'Olá Mundo!'

//Altera a imagem quando clicamos nela---------
var minhaImagem = document.querySelector('img');

// função
minhaImagem.onclick = function() {
  var meuSrc = minhaImagem.getAttribute('src');
  if(meuSrc === 'images/logo_simplement_it_2.png') {
    minhaImagem.setAttribute ('src', 'images/logo_simplement_it_3.png');
  } else {
    minhaImagem.setAttribute ('src', 'images/logo_simplement_it_2.png');
  }
}

var meuBotao = document.querySelector('button');
var meuHeading = document.querySelector('h1');

// função
function setUserName() {
  var meuNome = prompt('Por favor digite o seu nome.');
  localStorage.setItem('name', meuNome);
  meuHeading.innerHTML = 'Mozzila is cool, ' + meuNome;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var nomeGuardado = localStorage.getItem('name');
  meuHeading.innerHTML = 'Mozzila is cool, ' + nomeGuardado;
}

// função
meuBotao.onclick = function() {
  setUserName();
}
