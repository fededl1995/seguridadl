document.addEventListener("DOMContentLoaded", function () {
    const botonIniciar = document.getElementById("boton-iniciar");
    const pantallaInicio = document.getElementById("pantalla-inicio");
    const mainContent = document.getElementById("main");

    // Manejo del evento de clic en el botón
    botonIniciar.addEventListener("click", function () {
        pantallaInicio.style.display = "none";
        mainContent.style.display = "block";
    });

    // Añadir un evento para que la sección de contacto sea más fácil de usar
    const formulario = document.querySelector("form");
    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío por defecto

        // Aquí podrías implementar una lógica adicional si lo deseas
        alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
        
        // Opción para limpiar el formulario después de enviar
        formulario.reset();
    });
});
