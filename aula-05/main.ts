import { Warrior } from "./Gerreiro";
import Person from "./Personagem";
import { Priste } from "./Priste";
import { Wizard } from "./Wizard";

const wizard: Person = new Wizard("Allan");
console.log("🚀 ~ file: main.ts ~ line 6 ~ wizard", wizard);
const warrior: Person = new Warrior("Max");
console.log("🚀 ~ file: main.ts ~ line 8 ~ warrior", warrior);
const priste: Person = new Priste("Martins");
console.log("🚀 ~ file: main.ts ~ line 10 ~ priste", priste);
