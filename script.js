document.addEventListener("DOMContentLoaded", function () {
    const botonIniciar = document.getElementById("boton-iniciar");
    const pantallaInicio = document.getElementById("pantalla-inicio");
    const mainContent = document.getElementById("main");
    const adContainer = document.createElement("div");
    const closeButton = document.createElement("button");
    const adImage = document.createElement("img");

    // Configuración del contenedor de publicidad
    adContainer.classList.add("ad-container");
    adImage.src = "ruta/a/tu/imagen/publicidad.jpg"; // Cambia esta ruta por la de tu imagen de publicidad
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

    // Añadir un evento para que la sección de contacto sea más fácil de usar
    const formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault(); // Evitar el envío por defecto

            // Aquí podrías implementar una lógica adicional si lo deseas
            alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
            
            // Opción para limpiar el formulario después de enviar
            formulario.reset();
        });
    }
});
