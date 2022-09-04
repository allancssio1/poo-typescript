import Person from "./Personagem";
import { Util } from "./Util";

class Priste extends Person {
  constructor(nome: string) {
    super(nome);
    this._espirito = Util.initial(1, 5);
    this._habilidade = Util.initial(1, 3);
  }
}
