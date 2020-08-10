let age = parseInt(prompt("Digite sua idade: "), 10);
function checaIdade(idade) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (idade >= 18) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}
checaIdade(age)
  .then(() => {
    console.log("Maior que 18");
  })
  .catch(() => {
    console.log("Menor que 18");
  });
