import prompt from "prompt-sync";
import Personagem from "./Personagem";

let personSansa: Personagem = new Personagem("Sansa Stark", 30, 50, 100, 20);
let teclado = prompt();

let option: number = 0;

while (option != 9 || personSansa.isAlive()) {
  console.log(">===== Personagem ====<");
  console.log("| 1. Treinar ataque    |");
  console.log("| 2. Treinar defesa    |");
  console.log("| 3. Descansar         |");
  console.log("| 4. Entrar em batalha |");
  console.log("| 5. Mostrar atributos |");
  console.log("| 9. Sair              |");
  console.log("|>====================<|");

  option = +teclado("Escoha uma ação: ");

  switch (option) {
    case 1:
      personSansa.treinarAtaque();
      personSansa.showStatus();
      break;
    case 2:
      personSansa.treinarDefesa();
      personSansa.showStatus();
      break;
    case 3:
      personSansa.descansar();
      personSansa.showStatus();
      if (personSansa.energia >= 100) personSansa.energia = 100;
      break;
    case 4:
      personSansa.batalhar();
      personSansa.showStatus();
      break;
    case 5:
      personSansa.showStatus();
      break;
    default:
      break;
  }
}
