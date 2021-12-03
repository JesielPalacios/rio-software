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

function obtenerPreguntas() {
  // console.log(leerTexto('data/preguntas.json'));
  let preguntas = leerTexto('data/preguntas.json');
  let preguntasParseadas = JSON.parse(preguntas);
  pregunta = preguntasParseadas[0];
  console.log(pregunta);
  id('categoria').innerHTML = pregunta.categoria;
  id('pregunta').innerHTML = pregunta.pregunta;
  id('boton1').innerHTML = pregunta.respuesta;
  id('boton2').innerHTML = pregunta.incorrecta;
  // id('boton3').innerHTML = pregunta.incorrecta2;
  // id('boton4').innerHTML = pregunta.incorrecta3;
  id('imagen').setAttribute('src', pregunta.imagen);
  id('imagen').setAttribute('alt', pregunta.descripcion);
  estilo('imagen').objectFit = pregunta.object_fit;
}

obtenerPreguntas();
