import Person from "./Personagem";
import { Util } from "./Util";

export class Warrior extends Person {
  constructor(nome: string) {
    super(nome);
    this._força = Util.initial(1, 5);
    this._agilidade = Util.initial(1, 3);
  }
}
