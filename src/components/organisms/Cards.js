import styles from "../../../styles/components/Cards.module.css";

function Cards({ title, enterpriseName, description, day, local }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <h2>{enterpriseName}</h2>
        <p>{description}</p>
      </div>

      <div className={styles.details}>
        <h3>Publicado em:</h3>
        <p>{day}</p>
        <p>{local}</p>
      </div>
    </div>
  );
}

export default Cards;
