export class InterfazDeUsuario {
  constructor() {}

  total;

  id(id) {
    return document.getElementById(id);
  }

  estilos(id) {
    return select_id(id).style;
  }
  /**
   *
   * @param {sting} text
   */
  mostrarPregunta(text) {
    const questionTitle = this.id('pregunta');
    questionTitle.innerHTML = text;
  }

  /**
   *
   * @param {string[]} opciones
   */
  mostrarOpciones(opciones, callback) {
    const contenedorOpciones = this.id('opciones');
    contenedorOpciones.innerHTML = '';

    for (let i = 0; i < opciones.length; i++) {
      const boton = document.createElement('button');
      boton.addEventListener('click', () => callback(opciones[i]));
      boton.className = 'boton';
      boton.innerText = opciones[i];

      contenedorOpciones.append(boton);
    }
  }

  mostrarPuntaje(puntaje) {
    const reporteFinal = `
      <h1>Los resultados para ${this.nombreUsuario} son</h1>
      <h2 id="puntaje">Respuestas correctas: ${puntaje} de ${this.total}</h2>
      `;
    // <h2 id="puntaje">Su puntaje: ${quiz.puntaje}</h2>

    const element = this.id('quiz');
    element.innerHTML = reporteFinal;
  }

  mostrarProgreso(indiceActual, total) {
    var element = this.id('progreso');
    this.total = total;
    element.innerHTML = `Pregunta # ${indiceActual} de ${total}`;
  }

  nombreUsuario;

  guardaNombre() {
    return Swal.fire({
      title: 'Bienvenido a Trivia JS',
      input: 'text',
      inputLabel: 'A continuación ingrese su nombre',
      inputPlaceholder: 'Su nombre aquí...',
      showCancelButton: true,
      imageUrl:
        'https://repository-images.githubusercontent.com/284165871/f1856e00-d4a4-11ea-88ec-ff04d651bd8a',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Empezar',
      cancelButtonText: 'Cancelar',
    });
  }

  reintentarGuardarNombre() {
    Swal.fire(
      // '¡Oh no!',
      // 'No ha ingresado ningún nombre, ¿desea intentarlo de nuevo?',
      // 'warning'
      {
        title: '¡Oh no!',
        icon: 'warning',
        text: 'No has ingresado ningún nombre',
        confirmButtonText: 'Te llamaremos como: "Invitado"',
      }
    );
  }

  registrarUsuario() {
    this.guardaNombre()
      .then((respuesta) => {
        this.nombreUsuario = respuesta.value;
        // console.log(this.nombreUsuario);
        if (this.nombreUsuario == undefined || this.nombreUsuario.length == 0) {
          this.nombreUsuario = 'INVITADO';
          // console.log(this.nombreUsuario);
        }
        if (this.nombreUsuario == 'INVITADO') {
          this.reintentarGuardarNombre();
        }
      })
      .catch(() => {});
  }
}
