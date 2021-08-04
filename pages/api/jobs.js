/* Não estou utilizando esse arquivo, pois a API
a qual estamos consultando é ONLINE, e não LOCAL.
  Link da API Online = https://api-overjobs-thiagosilvalopes.herokuapp.com/jobs
*/

/* Se quiser usar uma API local:

1º Salve o .json da API em src/docs;
2º Use o import:*/
import jobs from "../../src/docs/jobs.json";

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    if (id) {
      const [item = []] = jobs.filter((item) => item.id == id);
      res.status(200).json({
        jobs: item
      });
    } else {
      res.status(200).json({
        jobs
      });
    }
  } else {
    res.status(400).json({
      error: true,
      message: "Essa API não suporta outro método/requisição além do 'GET' 😕"
    });
  }

  /* Se eu quiser criar uma proteção a mais para essa 
  API local, basta apenas envolver todo o código ACIMA 
  dentro desse if ABAIXO: 

  if (req.query.password === "códigoSecreto") {
    //Sendo assim para acessar essa API, devemos usar a URL:
    //http://localhost:3000/api/jobs?password=códigoSecreto
    //ABAIXO, TODO O CÓDIGO DA API NORMAL (Limite = 3º else):

  } else {
    res.status(400).json({
      error: true,
      message: "Acesso não autorizado‼😑 - Falta a senha dessa API na URL para requisição! 🙅‍♂️"
    });
  }
  */
}
