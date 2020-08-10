// 3.1
/*const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});*/

const arr = [1, 2, 3, 4, 5];
const oi = arr.map((item) => item + 10);
console.log(oi);
//

// 3.2
// Dica: Utilize uma constante pra function
/*const usuario = { nome: 'Antonio', idade: 18 };
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);*/

const usuario = { nome: "Antonio", idade: 18 };
const mostraIdade = (usuario) => usuario.idade;
//

// 3.3
// Dica: Utilize uma constante pra function
/*const nome = "Antonio";
const idade = 18;
function mostraUsuario(nome = 'Antonio', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);*/

const nome = "Antonio";
const idade = 18;

const mostraUsuario = (nome = "antonio", idade = 18) => ({ nome, idade });
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
//

// 3.4
/*const promise = function() {
  return new Promise(function(resolve, reject) {
  return resolve();
  })
 }*/

const promise = () => {
  return new promise((resolve, reject) => resolve());
};
