import Person from "./Personagem";
import { Util } from "./utils/Util";

export class Priste extends Person {
  constructor(nome: string) {
    super(nome);
    this._espirito = Util.initial(1, 5);
    this._habilidade = Util.initial(1, 3);
  }

  public atacar(): string {
    return "Ataque do Priste";
  }

  public defender(atacante: Person): number {
    return 1;
  }
}
