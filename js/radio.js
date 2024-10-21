document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const playPause = document.getElementById("play");
    const playIcon = playPause.querySelector(".fi-sr-play");
    const pauseIcon = playPause.querySelector(".fi-sr-pause");
    const currentSong = document.getElementById("currentSong");
  
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

    const eventSource = new EventSource("https://api.zeno.fm/mounts/metadata/subscribe/jhcuzjg99dquv");

    eventSource.addEventListener("message", function(event) {
        const data = JSON.parse(event.data);
        if(data.streamTitle) {
            currentSong.textContent = data.streamTitle;
        };
    });

    eventSource.addEventListener("error", function(event){
        console.error("Error in SSE connection", event);
        currentSong.textContent = "Unable to fetch song title";
    });
  });
