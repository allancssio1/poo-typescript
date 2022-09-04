import Person from "./Personagem";
import { Util } from "./Util";

class Wizard extends Person {
  constructor(nome: string) {
    super(nome);
    this._inteligencia = Util.initial(1, 5);
    this._sabedoria = Util.initial(1, 3);
  }
}
