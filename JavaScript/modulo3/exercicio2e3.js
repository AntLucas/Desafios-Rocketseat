let inputElement = document.querySelector("#app input");
let btnElement = document.querySelector("#app button");
let listaElement = document.querySelector("#app ul");

btnElement.onclick = () => {
  listaElement.innerHTML = "";
  let carregando = document.createElement("li");
  let textoCarregando = document.createTextNode("Carregando...");

  carregando.appendChild(textoCarregando);
  listaElement.appendChild(carregando);
  axios
    .get("https://api.github.com/users/" + inputElement.value + "/repos")
    .then((response) => {
      listaElement.innerHTML = "";

      for (let i = 0; i < response.data.length; i++) {
        let repositorio = document.createElement("li");
        let textRepositorio = document.createTextNode(response.data[i].name);
        repositorio.setAttribute("id", i);

        repositorio.appendChild(textRepositorio);
        listaElement.appendChild(repositorio);
      }
    })
    .catch((err) => {
      listaElement.innerHTML = "";
      let carregando = document.createElement("label");
      let textoCarregando = document.createTextNode(
        "Erro 404, página não encontrada"
      );

      carregando.appendChild(textoCarregando);
      listaElement.appendChild(carregando);
      console.log(err);
    });
};
