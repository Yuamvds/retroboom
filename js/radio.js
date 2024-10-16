document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const playPause = document.getElementById("play");
    const playIcon = playPause.querySelector(".fi-sr-play");
    const pauseIcon = playPause.querySelector(".fi-sr-pause");
  
    playPause.addEventListener("click", () => {
        if (audio.paused || audio.ended) {
            playIcon.classList.add("hide");
            pauseIcon.classList.remove("hide");
            audio.play().catch(error => {
                console.error("Error playing audio:", error);
            });
        } else {
            audio.pause();
            playIcon.classList.remove("hide");
            pauseIcon.classList.add("hide");
        }
    });
  })
  