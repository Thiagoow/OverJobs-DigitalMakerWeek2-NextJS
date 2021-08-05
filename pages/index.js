import React from "react";
import Head from "next/head";
//Estilização desse componente:
import styles from "../styles/pages/Home.module.css";
//Importação dos nossos componentes criados manualmente:
import Cabeçalho from "../src/components/organisms/Cabeçalho";
import Filtros from "../src/components/molecules/Filtros";
import Card from "../src/components/molecules/Card";

export default function Home({ jobs }) {
  //console.log(jobs);

  const [vagas, setVagas] = React.useState(jobs);

  const [filtros, setFiltros] = React.useState({
    Categoria: [],
    Tipo: [],
    Nível: [],
    Modalidade: [],
    Estado: [],
    Cidade: []
  });

  const [filtroActive, setFiltroActive] = React.useState({});

  const toggleFiltro = (key, checked, value) => {
    console.log({
      key,
      checked,
      value
    });
  };

  /* Renderiza a função utilizando como parâmetro
  a array de jobs (definida lá embaixo da função): */
  React.useEffect(() => {
    //Pra cada vaga na array de jobs (vinda da API por SSR):
    jobs.forEach((job) => {
      /* Verifica os atributos de cada uma das vagas,
      e se elas existirem, adiciona como opção de filtro,
      junto com o estadoAnterior/previousState: */
      setFiltros((prevState) => {
        let objeto = prevState;
        /* Se existir um atributo categoria na vaga
        ou seja, maior que zero: */
        if (prevState.Categoria.indexOf(job.category) < 0) {
          /* Adiciona essa categoria como uma
          opção de filtragem 😉, junto com todos
          as outras opções já existentes (utilizando o
          o operador rest -> "...var"):  */
          objeto.Categoria = [...objeto.Categoria, job.category];
        }
        //Faz o mesmo processo pros outros tipos de filtragem:
        if (prevState.Tipo.indexOf(job.type) < 0) {
          objeto.Tipo = [...objeto.Tipo, job.type];
        }
        if (prevState.Nível.indexOf(job.level) < 0) {
          objeto.Nível = [...objeto.Nível, job.level];
        }
        if (prevState.Modalidade.indexOf(job.model) < 0) {
          objeto.Modalidade = [...objeto.Modalidade, job.model];
        }
        if (prevState.Estado.indexOf(job.state) < 0) {
          objeto.Estado = [...objeto.Estado, job.state];
        }
        if (prevState.Cidade.indexOf(job.city) < 0) {
          objeto.Cidade = [...objeto.Cidade, job.city];
        }

        return { ...objeto };
      });
    });
  }, [jobs]);

  return (
    /* No Next/React, usamos as propriedades CSS 
    HTML, e Javascript em camelCase: */
    <div className={styles.estrutura}>
      {/* Definido tbm no _document.js:*/}
      <Head>
        <title>OverJobs</title>
      </Head>
      {/* Componentes inseridos abaixo = Criados manualmente
      para esse projeto: */}
      <Cabeçalho />

      <div className={styles.cardContainer}>
        <div className={styles.filtro}>
          <h4>Filtrar por:</h4>

          <div className={styles.filtro_list}>
            {/* Pra cada item da array filtros, a partir do index:: */}
            {Object.keys(filtros).map((key, index) => (
              /* Retorna um componente filter,
               com o id único 'key':*/
              <Filtros
                key={index}
                filtros={filtros[key]}
                onChange={toggleFiltro}
                categoria={key}
              />
            ))}
          </div>
        </div>

        <div className={styles.cards}>
          {/* Se existirem vagas, retorna cada um deles
        dentro de um componente Card, com a key e atributos: */}
          {vagas &&
            vagas.map((key, index) => (
              <Card
                key={index}
                title={key.title}
                enterpriseName={key.enterprise}
                description={key.description}
                day={key.day}
                local={`${key.city} - ${key.state}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
/* A partir daqui, parte do SSR: */
export async function getStaticProps() {
  //Pega a resposta do fetch da API:
  const res = await fetch(
    "https://api-overjobs-thiagosilvalopes.herokuapp.com/jobs"
  );
  //Salva os dados de resposta do servidor como .json pra var data:
  const data = await res.json();

  return {
    props: {
      jobs: data
    }
  };
}
