<?php

$destinatario = "estebantoloza1998@gmail.com";
$nombre = $_POST['nombre'];
$telefono = $_POST['numero'];
$mensaje = $_POST['mensaje'];
$asunto = "Contactos ETM";
$header = "Mensaje de contacto de Portafolio ETM";

$mensajeCompleto = $mensaje. "\nAtentamente: ".$nombre;

mail($destinatario,$asunto,$mensajeCompleto,$header);

$_SESSION['message-success'] = "Mensaje enviado exitosamente!";

header("location: ../contacto.html");