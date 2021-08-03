import styles from "../../../styles/components/Filtros.module.css";

function Filtros({ categoria, filtros, onChange }) {
  return (
    <div className={styles.filtros}>
      <h5 className={styles.title}>{categoria}</h5>
      <ul className={styles.filtros_list}>
        {filtros &&
          filtros.map((item) => {
            //Criando um ID único a partir da categoria:
            const id = `${categoria.toLowerCase()}-${filtros
              .toString()
              .replace(" ", "")}`;

            return (
              <li key={item}>
                <input
                  type="checkbox"
                  name={categoria.toLowerCase()}
                  onChange={(event) =>
                    onChange(categoria, event.target.checked, filtros)
                  }
                  id={id}
                />
                <label htmlFor={id}>{filtros}</label>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Filtros;
