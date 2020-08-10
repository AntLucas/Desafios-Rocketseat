//functions.js
/*export const idade = 23;
export default class Usuario {
  static info() {
    console.log("Apenas teste");
  }
}
*/

//1.1
import ClasseUsuario from "./functions";
ClasseUsuario.info();
//

//1.2
import { idade } from "./functions";
let ulElement = document.querySelector("#ul");
let age = document.createElement("label");
let numero = document.createTextNode(idade);

age.appendChild(numero);
ulElement.appendChild(age);

//1.3

import Usuario from "./functions";
import { idade as IdadeUsuario } from "./functions";
