import React from "react";
import styles from "../../../styles/components/Card.module.css";

function CardDetails({
  title,
  enterpriseName,
  description,
  day,
  local,
  model,
  category,
  type
}) {
  //Var pra mostrar mais ou menos da descrição:
  const [lendoMais, setLendoMais] = React.useState(true);
  const [lerMais, setLerMais] = React.useState(false);

  /* Função que dá o toggle 
  pra mostrar mais ou não: */
  function toggleLerMais() {
    if (description.length > 240 && lendoMais) {
      setLerMais(!lerMais);
    }
    if (description.length <= 240) {
      setLerMais(!lerMais);
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2>
          {title} {category}
        </h2>
        <b> {enterpriseName}</b>

        {lerMais && <p>{description}</p>}

        {lendoMais && (
          <>
            <p>
              {description.slice(0, 240)}

              <button
                className={styles.toggleButton}
                onClick={(e) => toggleLerMais(e)}
              >
                {lerMais ? "Ler menos" : "Ler mais"}
              </button>
            </p>
          </>
        )}

        <div className={styles.mobileDetails}>
          <p className={styles.h4}>
            Tipo: {""}
            <b className={styles.p}>{type}</b>
          </p>
          <p className={styles.h4}>
            Modalidade: {""}
            <b className={styles.p}>{model}</b>
          </p>
          <p className={styles.h4}>
            Publicado em: {""}
            <b className={styles.p}>
              {day}, {local}
            </b>
          </p>
        </div>
      </div>

      <div className={styles.details}>
        <p className={styles.h4}>
          Tipo: {""}
          <b className={styles.p}>{type}</b>
        </p>
        <p className={styles.h4}>
          Modalidade: {""}
          <b className={styles.p}>{model}</b>
        </p>
        <p className={styles.h4}>
          Publicado em: {""}
          <b className={styles.p}>
            {day}, {local}
          </b>
        </p>
      </div>
    </div>
  );
}

export default CardDetails;
