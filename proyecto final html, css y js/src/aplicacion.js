//@ts-check
import { Quiz } from './modelos/Quiz.js';
import { InterfazDeUsuario } from './modelos/InterfazDeUsuario.js';
import { preguntas } from './data/preguntas.js';
import './estilos/estilos.css'
import './estilos/vars.styl';

// Renderizando la página
const renderizarPagina = (quiz, ui) => {
  if (quiz.verificaFinDeQuiz()) {
    ui.mostrarPuntaje(quiz.puntaje);
  } else {
    if (ui.nombreUsuario == null) {
      ui.registrarUsuario();
    }
    console.log(quiz);
    ui.mostrarPregunta(quiz.obtenerIndexDePregunta().contenidoOpcion);
    ui.mostrarProgreso(quiz.indexPregunta + 1, quiz.preguntas.length);
    ui.mostrarOpciones(
      quiz.obtenerIndexDePregunta().opciones,
      (opcionActual) => {
        quiz.devolverOpcion(opcionActual);
        renderizarPagina(quiz, ui);
      }
    );
  }
};

function main() {
  const quiz = new Quiz(preguntas);
  const ui = new InterfazDeUsuario();

  renderizarPagina(quiz, ui);
}

main();
