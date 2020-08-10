//1.1
// Função delay aciona o .then após 1s
var cont = 1;
const delay = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(cont);
    }, 1000);
  });

const umPorSegundo = async () => {
  console.log(await delay());
  cont++;
  console.log(await delay());
  cont++;
  console.log(await delay());
};
umPorSegundo();
//

//1.2
import axios from "axios";

const getUserFromGithub = async (user) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.log("Erro na API");
  }
};

getUserFromGithub("antlucas");
getUserFromGithub("antshushuji");

//1.3

class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);

      console.log(response.data);
    } catch (err) {
      console.log("Repositório não existe");
    }
  }
}
Github.getRepositories("antlucas/Neoservice");
Github.getRepositories("rocketseat/dslkvmskv");
//

//1.4
const buscaUsuario = async (user) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);

    console.log(response.data);
  } catch (err) {
    console.log("Usuário não existe");
  }
};
buscaUsuario("antlucas");
