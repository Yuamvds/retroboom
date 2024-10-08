document.addEventListener("scroll", function(){
    const scrollPosition = window.scrollY;
    const backgroundSection = document.querySelector(".banner-collage");


    backgroundSection.style.backgroundPosition = `center ${scrollPosition * 0.02}px`;
});