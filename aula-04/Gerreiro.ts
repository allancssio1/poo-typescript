import Person from "./Personagem";
import { Util } from "./Util";

class Warrior extends Person {
  private _força: number;
  private _agilidade: number;

  constructor() {
    this._força = Util.randomizar(5);
    this._agilidade = Util.randomizar(3);
  }
}
