<?php
// Habilitar la visualización de errores
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $nombre = htmlspecialchars(trim($_POST['nombre']));
    $email = htmlspecialchars(trim($_POST['email']));
    $mensaje = htmlspecialchars(trim($_POST['mensaje']));

    // Validar que los campos no estén vacíos
    if (empty($nombre) || empty($email) || empty($mensaje)) {
        echo "Por favor, completa todos los campos correctamente.";
        exit;
    }

    // Formatear los datos para guardarlos
    $datos = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje\n\n";

    // Definir la ruta donde quieres guardar el archivo
    $rutaDestino = 'C:\Users\casii\Documents\GitHub'; // Cambia esto a tu ruta deseada

    // Crear un nombre de archivo único
    $fechaHora = date("Ymd_His");
    $nombreArchivo = $rutaDestino . "datos_contacto_{$fechaHora}.txt"; // Agrega la ruta al nombre del archivo

    // Guardar los datos en un archivo
    if (file_put_contents($nombreArchivo, $datos) === false) {
        echo "Error al guardar los datos en el archivo.";
    } else {
        echo "Los datos han sido guardados con éxito en el archivo: $nombreArchivo.";
    }
} else {
    echo "Método no permitido.";
}
?>
