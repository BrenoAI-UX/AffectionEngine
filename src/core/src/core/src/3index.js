import { mascoteResponder } from './core/MascoteResponder.js';

function falar(texto) {
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = 'pt-BR';
  speechSynthesis.speak(fala);
}

window.enviarMensagem = function () {
  const entrada = document.getElementById("entrada").value;
  const resposta = mascoteResponder(entrada);
  document.getElementById("mensagens").innerHTML += `<p><strong>Você:</strong> ${entrada}</p>`;
  document.getElementById("mensagens").innerHTML += `<p><strong>Mascote:</strong> ${resposta}</p>`;
  document.getElementById("falaMascote").innerText = resposta;
  falar(resposta);
}
