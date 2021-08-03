import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
//Importação dos nossos componentes criados manualmente:
import Cabeçalho from "../src/components/organisms/Cabeçalho";
import Filtros from "../src/components/molecules/Filtros";
import Cards from "../src/components/organisms/Cards";

export default function Home() {
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
        <Filtros />
        <Cards />
      </div>
    </div>
  );
}
