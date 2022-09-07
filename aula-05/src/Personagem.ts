import { Util } from "./utils/Util";

/**
 * class abstrata não pode ser instanciada. e não é obrigatório posuir metodos abstratos.
 * mas metodos abstratos so podem ser usados em classe abstratas.
 * As classes abstratas podem ser extendidas.
 */

export default abstract class Person {
  protected _nome: string;
  protected _armadura: number;
  protected _vidaMaxima: number;
  protected _vidaAtual: number;
  protected _força: number;
  protected _agilidade: number;
  protected _inteligencia: number;
  protected _sabedoria: number;
  protected _espirito: number;
  protected _habilidade: number;

  constructor(nome: string) {
    this._nome = nome;
    this._força = Util.initial(1, 0);
    this._agilidade = Util.initial(1, 0);
    this._armadura = Util.initial(1, 0);
    this._vidaMaxima = Util.initial(100, 0);
    this._vidaAtual = Util.initial(100, 0);
    this._inteligencia = Util.initial(1, 0);
    this._sabedoria = Util.initial(1, 0);
    this._espirito = Util.initial(1, 0);
    this._habilidade = Util.initial(1, 0);
  }
  public abstract atacar(): string;
  public abstract defender(atacante: Person): number;
}
