// scripts.js
const musica = document.getElementById('musica');
const pausarBotao = document.getElementById('pausar');
const continuarBotao = document.getElementById('continuar');

pausarBotao.addEventListener('click', () => {
    musica.pause();
});

continuarBotao.addEventListener('click', () => {
    musica.play();
});
