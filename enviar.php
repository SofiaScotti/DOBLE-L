<?php
$destino= "doblel.mayorista@gmail.com"
$Nombre= $_POST ["Nombre"];
$Apellido= $_POST ["Apellido"];
$Mensaje= $_POST ["Mensaje"];

$contenido= "Nombre: " . $Nombre . "/nApellido: " . $Apellido . "/nMensaje: " . $Mensaje

mail($destino,"Contacto", $contenido);

header("Location:Gracias.html");

?>

