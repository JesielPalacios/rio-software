//@ts-check
import { Pregunta } from './Pregunta.js';

export class Quiz {
  puntaje = 0;
  indexPregunta = 0;

  /**
   *
   * @param {Pregunta[]} preguntas
   */
  constructor(preguntas) {
    this.preguntas = preguntas;
  }

  /**
   *
   * @returns {Pregunta} La pregunta encontrada
   */
  obtenerIndexDePregunta() {
    return this.preguntas[this.indexPregunta];
  }

  verificaFinDeQuiz() {
    return this.preguntas.length === this.indexPregunta;
  }

  devolverOpcion(respuesta) {
    if (this.obtenerIndexDePregunta().respuestaCorrecta(respuesta)) {
      this.puntaje++;
    }
    this.indexPregunta++;
  }
}
