//***************** DESAFIO JQUERY  CLASE 12 SELECTORES Y EVENTOS ****************************  []  *************************************** */

let formulario = document.getElementById("form");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  const name = $("#Nombre").val();
  const apellido = $("#Apellido").val();
  const telefono = $("#telefono").val();
  const email = $("#email").val();
  const mensaje = $("#mensaje").val();
  console.log(name, apellido, telefono, email, mensaje);
}

//**************  DESAFIO CLASE 13 COMPLEMENTARIO ANIMACIONES CONCATENADAS CON JQUERY ********************************************************************** */

fadeIn.delay.fadeOut;
