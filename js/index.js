//Constantes iniciales
const main = document.getElementById('main');
const contenidoInicial = document.getElementById('contenido-1');
const mainBtn = document.getElementById('main-btn');
// Constante  para almacenar contenido
const contenido2 = document.getElementById('contenido-2');

main.addEventListener('click', (e) => {
  //Para confirmar si el button es de main principal
  if (e.target === mainBtn) {
    contenidoInicial.remove();
    contenido2.append(agregarNota);
  }
  //PAra confirmar si es el button es de borrar
  if (e.target.id === 'borrar-nota') {
    let checkClick = confirm("Seguro que quieres borrar este elemento?");

    if (checkClick == true) {

      contenido2.remove();
    }
    console.log('si soy');
  }
  //Encontrar elemento submit de la forma
  if (e.target.id === 'agregar-nota') {
    const agregarNota = e.target;
    console.log(agregarNota);

    // crear evento para escuchar para click en el boton agregar
    agregarNota.addEventListener('click', (event) => {
      //crear constante de las input
      const titulo = document.getElementById('titulo');
      const nota = document.getElementById('nota');
      const fecha = document.getElementById('fecha');
      //Crear objeto para guardar informacion

      const formulario = {
        title: titulo.value,
        note: nota.value,
        fecha1: fecha.value,


      }
      //mostrar la informacion
      console.log(formulario);




    })


  }
});




//Crear Elementos con HTML

const agregarNota = document.createElement('div');
agregarNota.innerHTML = `
<form id="main-form">
  <input type="text" name="titulo" id="titulo" placeholder="Agregar Titulo">
  <input type="text" name="nota" id="nota" placeholder="Agregar Tu nota">
  <input type="text" name="fecha" id="fecha" placeholder="Agregarla fecha Tu nota">
  <button type="button " id="borrar-nota">Borrar Nota</button>

  <button type="button" id="agregar-nota">Agregar nota</button>
</form>`;




//CREAR CONSTANTE DE BORRAR
const btnDeBorrar = document.getElementById('borrar-nota');







