import React from "react";
import Link from "next/link";
import Image from "next/image";
//Arquivo de estilização desse componente:
import styles from "../../../styles/components/Cabeçalho.module.css";
import Logo from "../atoms/Logo";

function Cabeçalho({ showSearch = true, filtrarVagas }) {
  const [buscaVaga, setBuscaVaga] = React.useState("");
  const [buscaCidade, setBuscaCidade] = React.useState("");

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
      {/* Se a var abaixo for true, renderiza o filtro superior: */}
      {showSearch && (
        <div className={styles.buscar}>
          <div className={styles.sonsBuscar}>
            <input
              type="text"
              placeholder="Digite um cargo"
              onChange={(e) => setBuscaVaga(e.target.value)}
              value={buscaVaga}
            />

            <input
              type="text"
              placeholder="Digite uma cidade"
              onChange={(e) => setBuscaCidade(e.target.value)}
              value={buscaCidade}
            />

            <button onClick={() => filtrarVagas(buscaVaga, buscaCidade)}>
              <Image
                src="/images/lupa.svg"
                width="25"
                height="50"
                alt="Buscar vaga"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cabeçalho;
