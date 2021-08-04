import styles from "../../../styles/components/Cards.module.css";

function Card({ title, enterpriseName, description, day, local }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <h3>{enterpriseName}</h3>
        <p>{description}</p>

        <div className={styles.mobileDetails}>
          <h4>Publicado em:</h4>
          <p>{day}</p>
          <p>{local}</p>
        </div>
      </div>

      <div className={styles.details}>
        <h3>Publicado em:</h3>
        <p>{day}</p>
        <p>{local}</p>
      </div>
    </div>
  );
}

export default Card;
