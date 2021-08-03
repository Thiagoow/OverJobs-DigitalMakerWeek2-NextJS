import React from "react";
import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
//Importação dos nossos componentes criados manualmente:
import Cabeçalho from "../src/components/organisms/Cabeçalho";
import Filtros from "../src/components/molecules/Filtros";
import Cards from "../src/components/organisms/Cards";

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
            {Object.keys(filtros).map((key, index) => (
              <Filtros
                key={index}
                filtros={filtros[key]}
                onChange={toggleFiltro}
                categoria={key}
              />
            ))}
          </div>
        </div>

        <Cards />
      </div>
    </div>
  );
}
/* A partir daqui, parte do SSR: */
export async function getStaticProps() {
  const res = await fetch(
    "https://api-overjobs-thiagosilvalopes.herokuapp.com/jobs"
  );
  const data = await res.json();

  return {
    props: {
      jobs: data
    }
  };
}
