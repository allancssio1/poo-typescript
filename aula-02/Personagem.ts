export default class Personagem {
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number,
  ) {}

  showStatus(): void {
    console.log("nome =>", this.nome);
    console.log("ataque =>", this.ataque.toFixed(1));
    console.log("defesa =>", this.defesa.toFixed(1));
    console.log("energia =>", this.energia.toFixed(1));
    console.log("vida =>", this.vida.toFixed(1));
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

  batalhar(): void {
    this.energia += Math.random() * 100;
  }

  isAlive(): boolean {
    if (this.energia <= 0) {
      console.log("Ops! Você morreu!");
      return true;
    } else {
      return false;
    }
  }
}
