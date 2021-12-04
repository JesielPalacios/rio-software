function id(id) {
  return document.getElementById(id);
}

function estilo(id) {
  return select_id(id).style;
}

function leerTexto(rutaLocal) {
  var texto = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', rutaLocal, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
}

// console.log(leerTexto('data/preguntas.json'));
let preguntas = leerTexto('data/preguntas.json');
let preguntasParseadas = JSON.parse(preguntas);
let pregunta;
let posiblesRespuestas = [];

function obtenerPreguntas(numeroPregunta) {
  pregunta = preguntasParseadas[numeroPregunta];
  // console.log(pregunta);
  id('categoria').innerHTML = pregunta.categoria;
  id('pregunta').innerHTML = pregunta.pregunta;
  if (pregunta.categoria == 'opcion-multiple-respuesta-unica') {
    id('boton1').innerHTML = pregunta.respuesta;
    id('boton2').innerHTML = pregunta.incorrecta1;
    id('boton3').innerHTML = pregunta.incorrecta2;
    id('boton4').innerHTML = pregunta.incorrecta3;
  } else {
    id('boton1').innerHTML = pregunta.respuesta;
    id('boton2').innerHTML = pregunta.incorrecta;
    id('boton3').remove();
    id('boton4').remove();
  }

  if (pregunta.imagen) {
    id('imagen').setAttribute('src', pregunta.imagen);
    estilo('imagen').height = '200px';
    estilo('imagen').width = '100%';
    console.log('Hay imagen');
  } else {
    id('imagen').remove();
  }

  // if (pregunta.imagen) {
  //   id('imagen').setAttribute('src', pregunta.imagen);
  //   style('imagen').height = '200px';
  //   style('imagen').width = '100%';
  //   id('imagen').setAttribute('alt', pregunta.descripcion);
  //   estilo('imagen').objectFit = pregunta.object_fit;
  // } else {
  //   style('imagen').height = '0px';
  //   style('imagen').width = '0px';
  // }
}

obtenerPreguntas(0);

// function escogerPreguntaAleatoria() {
//   escogerPregunta(Math.floor(Math.random() * preguntasParseadas.length));
//   // escogerPregunta(0);
// }

// escogerPreguntaAleatoria();

function desordenarOpciones(pregunta) {
  posiblesRespuestas = [
    pregunta.respuesta,
    pregunta.incorrecta1,
    pregunta.incorrecta2,
    pregunta.incorrecta3,
  ];
  posiblesRespuestas.sort(() => Math.random() - 0.5);

  if (pregunta.incorrecta) {
    id('boton1').innerHTML = pregunta.respuesta;
    id('boton2').innerHTML = pregunta.incorrecta;
    posiblesRespuestas = [pregunta.respuesta, pregunta.incorrecta];
  } else {
    posiblesRespuestas = [
      pregunta.respuesta,
      pregunta.incorrecta1,
      pregunta.incorrecta2,
      pregunta.incorrecta3,
    ];
    // id('boton1').innerHTML = pregunta.respuesta;
    // id('boton2').innerHTML = pregunta.incorrecta1;
    // id('boton3').innerHTML = pregunta.incorrecta2;
    // id('boton4').innerHTML = pregunta.incorrecta3;
    id('boton1').innerHTML = posiblesRespuestas[0];
    id('boton2').innerHTML = posiblesRespuestas[1];
    id('boton3').innerHTML = posiblesRespuestas[2];
    id('boton4').innerHTML = posiblesRespuestas[3];
  }
}
desordenarOpciones();

let botones = [id('boton1'), id('boton2'), id('boton3'), id('boton4')];

function eligeRespuesta(i) {
  // console.log(posiblesRespuestas[i]);
  // console.log(posiblesRespuestas);
  console.log(i)
}
