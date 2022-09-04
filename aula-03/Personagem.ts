export default class Personagem {
  constructor(
    private _nome: string,
    private _energia: number,
    private vida: number,
    private ataque: number,
    private defesa: number,
  ) {}

  // public PODE SER USADA EM QUALQUER OUTRO ARQUIVO;
  // private SÓ PODER SER USADA NESTA CLASS;
  // protected SÓ PODE SER USADO PELA CLASS PROPRIA E A QUE EXTENDER A MESMA

  // POR CONVENÇÃO, USASSE _ NA FRENTE DAS PROPRIEDADES PUBLICAS E USASSE O MESMO NOME
  // DO PARAMETRO PARA GERAR O GET E O SET DESSA PROPRIEDADE
  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public set energia(energia: number) {
    this._energia = energia;
  }

  public showStatus(): string {
    return `_nome: ${this._nome} \n ataque: ${this.ataque.toFixed(
      1,
    )} \n defesa: ${this.defesa.toFixed(1)} \n energia: ${this.energia.toFixed(
      1,
    )} \n vida: ${this.vida.toFixed(1)}`;
  }

  public treinarAtaque(): void {
    this.ataque += this.randon(7);
    this.energia -= this.randon(10);
  }

  public treinarDefesa(): void {
    this.defesa += this.randon(5);
    this.energia -= this.randon(10);
  }

  public descansar(tempo: number): void {
    this.energia += tempo * this.randon(10);
    if (this.energia >= 100) this.energia = 100;
  }

  public batalhar(): number {
    this.energia += this.randon(100);
    return this.energia;
  }

  public isAlive(): boolean {
    return this.energia <= 0;
  }

  private randon(fator: number): number {
    return Math.random() * fator;
  }
}
