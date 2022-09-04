import { Util } from "./Util";

export default class Person {
  private _nome: string;
  private _armadura: number;
  private _vidaMaxima: number;
  private _vidaAtual: number;

  constructor(nome: string) {
    this._nome = nome;
    this._armadura = Util.randomizar(5);
    this._vidaMaxima = Util.randomizar(50);
    this._vidaAtual = Util.randomizar(50);
  }
}
