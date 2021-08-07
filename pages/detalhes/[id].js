import styles from "../../styles/pages/Detalhes.module.css";
import Cabeçalho from "../../src/components/organisms/Cabeçalho";
import CardDetails from "../../src/components/molecules/CardDetails";
import axios from "axios";

export default function detalhesVaga({ vaga }) {
  return (
    <div className={styles.container}>
      <Cabeçalho showSearch={false} />

      <div className={styles.card}>
        {/* Se a vaga existir: */}
        {vaga && (
          <CardDetails
            title={vaga.title}
            enterpriseName={vaga.enterprise}
            description={vaga.description}
            day={vaga.day}
            local={`${vaga.city} - ${vaga.state}`}
            model={vaga.model}
            category={vaga.category}
            type={vaga.type}
          />
        )}
      </div>
    </div>
  );
}

//SSR:
/* Consertando o erro:
Error: getStaticPaths is required 
for dynamic SSG pages and is missing 
for '/detalhes/[id]'. */
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}

export async function getStaticProps({ params: { id } }) {
  /* Retorna API a var que possui o ID definido acima  */
  const { data } = await axios.get(`http://localhost:3000/api/jobs?id=${id}`);

  return {
    props: {
      vaga: data.jobs
    }
  };
}
