const boton = document.getElementById('play-boton');
const video = document.getElementById('video-subido');

boton.addEventListener('click', () => {
    video.src += "&autoplay=1";
    boton.style.display = 'none';
})