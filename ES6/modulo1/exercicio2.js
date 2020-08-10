const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" },
];

//2.1 Utilizando o map
const arrMap = usuarios.map((usuarios) => usuarios.idade);

console.log(arrMap);
//

//2.2 Utilizando o filter
const arrFilter = usuarios.filter((usuarios) => {
  return usuarios.empresa === "Rocketseat" && usuarios.idade >= 18;
});

console.log(arrFilter);
//

//2.3 Utilizando o find
const arrFind = usuarios.find((usuarios) => usuarios.empresa === "Google");
console.log(arrFind);
//

//2.4 Unindo operações
const arrIdadeVezes2 = usuarios.map((usuarios) => ({
  ...usuarios,
  idade: usuarios.idade * 2,
}));

const arrIdade = arrIdadeVezes2.filter((usuarios) => {
  return usuarios.idade < 50;
});
console.log(arrIdade);
