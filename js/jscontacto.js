//* ---------------------------- DESAFIO EVENTOS CLASE 9 ------método onclick en html Contacto linea 129------------[]-----------*//

let formulario = document.getElementById("form");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  const name = document.getElementById("Nombre").value;
  const apellido = document.getElementById("Apellido").value;
  const telefono = document.getElementById("telefono").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("Mensaje").value;
  console.log(name, apellido, telefono, email, mensaje);
}

//************************************************************************************ */
