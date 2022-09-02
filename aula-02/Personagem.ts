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

  descansar(): void {
    this.energia += Math.random() * 10;
  }

  batalhar(): number {
    this.energia += Math.random() * 100;
    return this.energia;
  }

  isAlive(): boolean {
    if (this.energia <= 0) {
      return true;
    } else {
      return false;
    }
  }
}
