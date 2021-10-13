class Datos {
  constructor(nombre, apellido, telefono, mail, mensaje){
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.mail = mail;
    this.mensaje = mensaje;
  }
}

let formulario = document.getElementById("form");


const contenedor = document.getElementById('contenedor');
const formEnviado = document.getElementById('btn-enviar');


function validarFormulario(e) {
  e.preventDefault();
  const nombre = $("#nombre").val();
  const apellido = $("#apellido").val();
  const telefono = $("#telefono").val();
  const email = $("#email").val();
  const mensaje = $("#mensaje").val();

  const datosUsuario = new Datos(nombre, apellido, telefono, email, mensaje);
  return datosUsuario;
}


formEnviado.addEventListener('click', function(e){
  const datos = validarFormulario(e);
  mostrarMensaje(datos, contenedor);
});

// Modal //

function mostrarMensaje(respuesta, contenedor) {
  contenedor.innerHTML =
  `
      <div class="modal-header">
        <h5 class="modal-title">¡Formulario Enviado!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Gracias por tu consulta, ${respuesta.nombre} ${respuesta.apellido}!</p>
        <p>Revisá que tus datos sean correctos y te contactaremos a la brevedad:</p>
        <p> Teléfono: ${respuesta.telefono} <p/>
        <p>E-mail: ${respuesta.mail}</p>
        <p> Tu mensaje: </p>
        <p> ${respuesta.mensaje} </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    `;
};

// Animación btn-enviar //

$('#btn-enviar').click(function() {
  $('#btn-enviar').fadeOut("slow", function() {
  });
});