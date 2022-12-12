// Constantes iniciales
const main = document.getElementById('main');
const contenidoInicial = document.getElementById('contenido-1');
const mainBtn = document.getElementById('main-btn');

// Constantes para almacenar contenido
const contenido2 = document.getElementById('contenido-2');
const contenidoNotas = document.getElementById('cont-notas');

// Crear una variable global para almacenar elemenos
let mainForm;

// Variables de forma globales
let titulo;
let nota;
let fecha;

main.addEventListener('click', (e) => {
  // Para confirmar si el click es el btn principal
  if (e.target === mainBtn) {
    contenidoInicial.remove();

    contenido2.append(agregarNota);

    // Asignar a mainForm el elemento de forma
    mainForm = document.getElementById('main-form');
  }

  // Para confirmar si el button es de borrar
  if (e.target.id === 'borrar-nota') {
    let checkClick = confirm("Seguro que quieres borrar?");

    if (checkClick == true) {
      contenidoNotas.remove();
    }
  }

  // Para encontrar el elemento submit de la forma
  if (e.target.id === 'agregar-nota') {
    // Crear escuchador de eventos para click en el buton agregar
    mainForm.addEventListener('submit', (event) => {
      // Evitar que la accion por defecto pase
      event.preventDefault();

      // Crear constantes de los inputs para obtener informacion de la forma
      titulo = document.getElementById('titulo');
      nota = document.getElementById('nota');
      fecha = document.getElementById('fecha');

      // Crear objeto para guardar informacion
      const formulario = {
        titulo1: titulo.value,
        notaText: nota.value,
        fecha1: fecha.value,
      }

      // Deconstruir el objeto
      const { titulo1, notaText, fecha1 } = formulario;

      // Creo constante con informacion
      const notaHtmlConInfo = agregarNotaDinamico(titulo1, notaText, fecha1);

      // Insertar HTML nuevo
      contenidoNotas.append(notaHtmlConInfo);

      // Reiniciar los valores de la forma
      titulo.value = '';
      nota.value = '';
      fecha.value = '';
    });

  }

});

// Crear elemento con HTML
const agregarNota = document.createElement('div');
agregarNota.innerHTML = `
<form id="main-form" class="card-body d-flex  flex-column">
<input type="text" name="titulo" class="form-control-plaintext text-center" id="titulo"
  placeholder="Ingresa el Titulo">
<input type="text" name="nota" class="form-control-plaintext text-center" id="nota"
  placeholder="Agregar tu nota">
<input type="text" name="fecha" id="fecha" class="form-control-plaintext text-center"
  placeholder="Agregar la fecha de tu nota">
<div class="card-body text-center">
  <button type="button" class="btn btn-outline-danger" id="borrar-nota"><i
      class="fa-regular fa-trash-can me-1"></i>Borrar Nota</button>
  <button type="submit" id="agregar-nota" class="btn btn-outline-dark"><i
      class="fa-regular fa-calendar-plus me-1"></i>Agregar Nota</button>
</div>

</form>
`;

// Funcion para agregar html dinamico en base a los resultados de la forma
function agregarNotaDinamico(titulo, nota, fecha) {
  const notaEnHtml = document.createElement('div');
  notaEnHtml.innerHTML = `
    <h2>${titulo}</h2>
    <p>${nota}</p>
    <p>${fecha}</p>
    <div class="card-body text-center">
    <button type="button" class="btn btn-outline-danger" id="borrar-nota"><i
        class="fa-regular fa-trash-can me-1"></i>Borrar Nota</button>
    <button type="submit" id="agregar-nota" class="btn btn-outline-dark"><i
        class="fa-regular fa-calendar-plus me-1"></i>Agregar Nota</button>
  </div>
  `

  return notaEnHtml;
}










