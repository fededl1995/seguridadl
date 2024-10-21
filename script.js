document.addEventListener("DOMContentLoaded", function () {
    const botonIniciar = document.getElementById("boton-iniciar");
    const pantallaInicio = document.getElementById("pantalla-inicio");
    const mainContent = document.getElementById("main");
    const adContainer = document.createElement("div");
    const closeButton = document.createElement("button");
    const adImage = document.createElement("img");

    // Configuración del contenedor de publicidad
    adContainer.classList.add("ad-container");
    adImage.src = "https://raw.githubusercontent.com/fededl1995/seguridadl/main/media/publicidad.jpg"; // URL de la imagen de publicidad
    adImage.classList.add("ad-image");
    closeButton.innerText = "Cerrar";
    closeButton.classList.add("close-button");

    // Añadir evento al botón de cerrar
    closeButton.addEventListener("click", function () {
        adContainer.style.display = "none"; // Oculta el contenedor de publicidad
    });

    // Agregar elementos al contenedor de publicidad
    adContainer.appendChild(adImage);
    adContainer.appendChild(closeButton);
    document.body.appendChild(adContainer); // Añadir el contenedor al cuerpo del documento

    // Manejo del evento de clic en el botón
    botonIniciar.addEventListener("click", function () {
        pantallaInicio.style.display = "none";
        mainContent.style.display = "block";

        // Mostrar la publicidad emergente
        adContainer.style.display = "flex";
    });
});
