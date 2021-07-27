<?php
$destino= "doblel.mayorista@gmail.com"
$Nombre= $_Post ["Nombre"];
$Apellido= $_Post ["Apellido"];
$Mensaje= $_Post ["Mensaje"];

$contenido= "Nombre: " . $Nombre . "/nApellido: " . $Apellido . "/nMensaje: " . $Mensaje

mail($destino,"Contacto", $contenido);

header(Location:"Gracias.html");

