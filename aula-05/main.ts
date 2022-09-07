import Person from "./src/Personagem";
import { Priste } from "./src/Priste";
import { Wizard } from "./src/Wizard";

const wizard: Person = new Wizard("Allan");
const priste: Person = new Priste("Martins");

const persons: Person[] = [];

persons.push(wizard);
persons.push(priste);

persons.forEach((p) => console.log(p.atacar()));
