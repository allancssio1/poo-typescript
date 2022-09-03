export default class Personagem {
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number,
  ) {}
  // TODA VEZ QUE PENSAR EM LER DADOS DE UMA CLASSE -> USAR PARAMETROS
  // TODA VEZ QUE PENSAR EM IMPRIMIR A CLASSE -> USAR RETURN
  showStatus(): string {
    return `nome: ${this.nome} \n ataque: ${this.ataque.toFixed(
      1,
    )} \n defesa: ${this.defesa.toFixed(1)} \n energia: ${this.energia.toFixed(
      1,
    )} \n vida: ${this.vida.toFixed(1)}`;
  }

  treinarAtaque(): void {
    this.ataque += Math.random() * 7;
    this.energia -= Math.random() * 10;
  }

  treinarDefesa(): void {
    this.defesa += Math.random() * 5;
    this.energia -= Math.random() * 10;
  }

  descansar(tempo: number): void {
    this.energia += tempo * (Math.random() * 10);
    this.energia > 100 && (this.energia = 100);
  }

  batalhar(): number {
    this.energia += Math.random() * 100;
    return this.energia;
  }

  isAlive(): boolean {
    return this.energia <= 0;
  }
}
