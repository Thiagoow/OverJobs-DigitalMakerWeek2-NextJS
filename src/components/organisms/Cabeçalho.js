import Link from "next/link";
import Image from "next/image";

//Arquivo de estilização desse componente:
import styles from "../../../styles/components/Cabeçalho.module.css";
import Logo from "../atoms/Logo";

function Cabeçalho() {
  return (
    <div className={styles.cabeçalho}>
      {/* Div superior: */}
      <div className={styles.logo}>
        <Logo />

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
