import React from "react";
import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
//Importação dos nossos componentes criados manualmente:
import Cabeçalho from "../src/components/organisms/Cabeçalho";
import Filtros from "../src/components/molecules/Filtros";
import Card from "../src/components/molecules/Card";

export default function Home({ jobs }) {
  const [vagas, setVagas] = React.useState(jobs);
  //console.log(jobs);

  const [filtros, setFiltros] = React.useState({
    Tipo: [],
    Categoria: [],
    Modalidade: [],
    Nível: [],
    Estado: [],
    Cidade: []
  });

  const [filtroActive, setFiltroActive] = React.useState({});

  const toggleFiltro = (key, checked, value) => {};

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
