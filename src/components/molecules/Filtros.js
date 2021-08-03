import styles from "../../../styles/components/Filtros.module.css";

function Filtros() {
  return (
    <div className={styles.filtro}>
      <h4 className={styles.title}>Categoria</h4>
      <ul className={styles.filtro_list}>
        <li>
          <input type="checkbox" name="teste" />
          <label>SP</label>
        </li>
      </ul>
    </div>
  );
}

export default Filtros;
