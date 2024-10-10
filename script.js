document.addEventListener("DOMContentLoaded", function () {
    const botonIniciar = document.getElementById("boton-iniciar");
    const pantallaInicio = document.getElementById("pantalla-inicio");
    const mainContent = document.getElementById("main");

    botonIniciar.addEventListener("click", function () {
        pantallaInicio.style.display = "none";
        mainContent.style.display = "block";
    });
});
