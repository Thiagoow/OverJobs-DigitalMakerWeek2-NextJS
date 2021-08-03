import Link from "next/link";
import Image from "next/image";
//Arquivo de estilização desse componente:
import styles from "../../../styles/components/Cabeçalho.module.css";

function Cabeçalho() {
  return (
    <div className={styles.cabeçalho}>
      {/* Div superior: */}
      <div className={styles.logo}>
        <Link href="/" passHref>
          <a>
            <Image
              src="/images/logo.svg"
              width="200"
              height="60"
              alt="Logo do OverJobs"
            />
          </a>
        </Link>

        <Link href="/" passHref>
          <a>
            <button className={styles.cadastrarBtn}>Cadastrar Vaga</button>
          </a>
        </Link>
      </div>

      {/* Div inferior: */}
      <div className={styles.buscar}>
        <div className={styles.sonsBuscar}>
          <input type="text" placeholder="Digite um cargo" />
          <input type="text" placeholder="Digite sua cidade" />

          <button>
            <Image
              src="/images/lupa.svg"
              width="25"
              height="50"
              alt="Buscar vaga"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cabeçalho;
