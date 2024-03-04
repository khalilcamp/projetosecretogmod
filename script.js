document.addEventListener('click', function() {
    var audio = new Audio('musica.mp3');
    audio.volume = 0.2;
    audio.play();

    var audio2 = new Audio('ambiencia.mp3');
    audio2.volume = 0.1;
    audio2.play();
});