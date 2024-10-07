const nav = document.querySelector("#menu");
const abrir = document.querySelector("#open-icon");
const cerrar = document.querySelector("#close-icon");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");  
    abrir.style.display = "none";  
    cerrar.style.display = "block";  
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");  
    abrir.style.display = "block"; 
    cerrar.style.display = "none";  
});
