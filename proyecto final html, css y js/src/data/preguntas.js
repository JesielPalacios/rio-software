import { Pregunta } from '../modelos/Pregunta.js';
import { datos } from './datos.js';

export const preguntas = datos.map(
  (pregunta) =>
    new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta)
);
