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


//************  MODAL  ************* */

const formEnviado = document.getElementById('btn-enviar');
const contenedor = document.getElementById('contenedor');
formEnviado.addEventListener('click', function(){
  mostrarMensaje(formEnviado, contenedor);
});

function mostrarMensaje(respuesta, contenedor) {
  
  `
      <div class="modal-header">
        <h5 class="modal-title">¡Formulario Enviado!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Gracias por tu consulta. Te contactaremos pronto.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    `;
    respuesta.innerHTML = contenedor;
};
