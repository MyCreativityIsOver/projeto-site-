/*/ scripts.js
const musica = document.getElementById('musica');
const pausarBotao = document.getElementById('pausar');
const continuarBotao = document.getElementById('continuar');

pausarBotao.addEventListener('click', () => {
    musica.pause();
});

continuarBotao.addEventListener('click', () => {
    musica.play();
});
// Aumenta o volume para 70%
musica.volume = 0.7;*/
// scripts.js
const musica = document.getElementById('musica');
const botaoMusica = document.getElementById('botaoMusica');

botaoMusica.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        botaoMusica.classList.remove('play');
        botaoMusica.classList.add('pause');
        botaoMusica.textContent = "⏸️ Pause";
    } else {
        musica.pause();
        botaoMusica.classList.remove('pause');
        botaoMusica.classList.add('play');
        botaoMusica.textContent = "▶️ Play";
    }
});

