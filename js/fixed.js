document.addEventListener("scroll", function() {
    const scrollPosition = window.pageYOffset;
    const backgroundSection = document.getElementById("banner-retro");

    backgroundSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
})
