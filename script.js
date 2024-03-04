const buttonAudio = document.querySelector('.rodape__butao');
const buttonLink = document.querySelector('.cabecalho__menu__link');
const buttonLinkDois = document.querySelector('.cabecalho__menu__link__dois');
const audio = document.getElementById('audio');

document.addEventListener('click', function() {
    var audio1 = new Audio('mygeeto.mp3');
    audio1.volume = 0.7;
    audio1.play();

    var audio2 = new Audio('ambiencia.mp3');
    audio2.volume = 0.1;
    audio2.play();
});

buttonAudio.addEventListener('click', () => {
    audio.play();
});

buttonLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    audio.play();
    
    
    audio.onended = () => {
        window.location.href = event.target.href;
    };
});

buttonLinkDois.addEventListener('click', (event) => {
    event.preventDefault(); // Prevenir o comportamento padrão do link
    audio.play();
    
    // Aguarde a reprodução do áudio terminar antes de navegar para o novo URL
    audio.onended = () => {
        window.location.href = event.target.href; // Navegar para o novo URL após a reprodução do áudio
    };
});

