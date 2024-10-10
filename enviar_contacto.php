<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recolectar y limpiar los datos del formulario
    $nombre = trim($_POST["nombre"]);
    $email = trim($_POST["email"]);
    $mensaje = trim($_POST["mensaje"]);

    // Validar los campos
    if (empty($nombre) || empty($email) || empty($mensaje)) {
        die("Por favor, completa todos los campos.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Por favor, ingresa un email válido.");
    }

    // Configurar los parámetros del correo
    $to = "tu-email@ejemplo.com"; // Cambia esto por tu dirección de correo
    $subject = "Nuevo mensaje de contacto";
    $body = "Nombre: $nombre\nEmail: $email\n\nMensaje:\n$mensaje";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        // Mensaje de éxito
        echo "Mensaje enviado correctamente. ¡Gracias por contactarnos!";
    } else {
        // Mensaje de error
        echo "Error al enviar el mensaje. Por favor, intenta nuevamente más tarde.";
    }
} else {
    // Manejo de solicitudes no permitidas
    echo "Método no permitido.";
}
?>
