import React from "react";
import styles from "../../../styles/components/Card.module.css";

function Card({
  title,
  enterpriseName,
  description,
  day,
  local,
  model,
  category,
  type
}) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2>
          {title} {category}
        </h2>
        <b> {enterpriseName}</b>
        <p>{description.slice(0, 80)}...</p>

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

export default Card;
