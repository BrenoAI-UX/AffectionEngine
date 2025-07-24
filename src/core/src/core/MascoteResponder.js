import { respondWithEmpathy } from './EmpathyResponder.js';

export function mascoteResponder(texto) {
  const resposta = respondWithEmpathy(texto);
  return resposta;
}
