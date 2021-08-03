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
}
