import prompt from "prompt-sync";

class Personagem {
  /**
   * os atributos comentados são desnecessário serem declarados
   * quando ja foram declarados no constructor
   */
  // nome: string = "";
  // energia: number = 0;
  // vida: number = 0;
  // ataque: number = 0;
  // defesa: number = 0;

  /**
   * quando passar parametro no contrutor,
   * ao chamar a class é necessário passar o parametro esperado
   * */
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number,
  ) {}
}
let personSansa: Personagem = new Personagem("Sansa Stark", 30, 50, 100, 20);
let teclado = prompt();

let option: number = 0;

while (0 < 9) {
  console.log(">=====bora treinar personagem====<");
  console.log("| 1. ataque                       |");
  console.log("| 2. defesa                       |");
  console.log("| 3. console.log                  |");
  console.log("| 4. sair                         |");
  console.log(">=================================<");

  option = +teclado("Escoha uma ação");

  switch (option) {
    case 1:
      personSansa.ataque += 10;
      break;
    case 2:
      personSansa.defesa += 5;
      break;
    case 3:
      console.log(personSansa);
      break;
    default:
      break;
  }
}

console.log("🚀 ~  personSansa", personSansa);
