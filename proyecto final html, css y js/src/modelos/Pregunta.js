class Pregunta {
  /**
   *
   * @param {string} contenidoOpcion El contenido de la pregunta.
   * @param {string[]} opciones Una lista de opciones para la pregunta.
   * @param {string} respuesta La opción correcta de la pregunta en cuestion. 
   */
  constructor(contenidoOpcion, opciones, respuesta) {
    this.contenidoOpcion = contenidoOpcion;
    this.opciones = opciones;
    this.respuesta = respuesta;
  }

  /**
   *
   * @param {string} opcion La opción selecionada por el usuario.
   * @returns {boolean} Devuelve True si la respuesta es correcta.
   */
  respuestaCorrecta(opcion) {
    return opcion === this.respuesta;
  }
}

export { Pregunta };
