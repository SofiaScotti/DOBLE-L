//* ---------------------------- DESAFIO EVENTOS CLASE  ----------------[]-----------*//

let formulario = document.getElementById("form");

formulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e) {
//   e.preventDefault();
//   const name = document.getElementById("Nombre").value;
//   const apellido = document.getElementById("Apellido").value;
//   const telefono = document.getElementById("telefono").value;
//   const email = document.getElementById("email").value;
//   const mensaje = document.getElementById("Mensaje").value;
//   console.log(name, apellido, telefono, email, mensaje);
// }

function validarFormulario(e) {
  e.preventDefault();
  const name = $("#Nombre").val();
  const apellido = $("#Apellido").val();
  const telefono = $("#telefono").val();
  const email = $("#email").val();
  const mensaje = $("#mensaje").val();
  console.log(name, apellido, telefono, email, mensaje);
}

//************************************************************************************ */
