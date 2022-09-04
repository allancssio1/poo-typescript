import prompt from "prompt-sync";
import Personagem from "./Personagem";

let person: Personagem = new Personagem("Sansa Stark", 30, 50, 100, 20);
let teclado = prompt();

let option: number = 0;

while (option != 9 || person.isAlive()) {
  console.log(`>===== Personagem ${person.nome}====<`);
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
      person.treinarAtaque();
      console.log(person.showStatus());
      break;
    case 2:
      person.treinarDefesa();
      console.log(person.showStatus());
      break;
    case 3:
      const tempo: number = +teclado("Digite o tempo de desanso");
      person.descansar(tempo);
      console.log(person.showStatus());
      break;
    case 4:
      person.batalhar();
      console.log(person.showStatus());
      break;
    case 5:
      console.log(person.showStatus());
      break;
    default:
      break;
  }
}
