"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class Personagem {
    /**
     * os atributos comentados são desnecessário serem declarados
     * quando ja foram declarados no constructor
     */
    // nome: string = "";
    // energia: number = 0;
    // vida: number = 0;
    // ataque: number = 0;
    // defesa: number = 0;
    /**
     * quando passar parametro no contrutor,
     * ao chamar a class é necessário passar o parametro esperado
     * */
    constructor(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
}
let personSansa = new Personagem("Sansa Stark", 30, 50, 100, 20);
let teclado = (0, prompt_sync_1.default)();
let option = 0;
while (0 < 9) {
    console.log(">=====bora treinar personagem====<");
    console.log("| 1. ataque                       |");
    console.log("| 2. defesa                       |");
    console.log("| 3. console.log                  |");
    console.log("| 4. sair                         |");
    console.log(">=================================<");
    option = +teclado("Escoha uma ação");
    switch (option) {
        case 1:
            personSansa.ataque += 10;
            break;
        case 2:
            personSansa.defesa += 5;
            break;
        case 3:
            console.log(personSansa);
            break;
        default:
            console.log(option);
            break;
    }
}
console.log("🚀 ~  personSansa", personSansa);
