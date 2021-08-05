import styles from "../../../styles/components/Filtros.module.css";
import { uniqueId } from "lodash";

function Filtros({ categoria, filtros, onChange }) {
  return (
    <div className={styles.filtros}>
      <h5 className={styles.title}>{categoria}</h5>
      <ul className={styles.filtros_list}>
        {/* Se existirem os filtros, retorna cada um deles
        dentro de uma li, com o ID único e atributos: */}
        {filtros &&
          filtros.map((item) => {
            //Id único criado com o lodash:
            const id = uniqueId();

            return (
              <li key={id}>
                <input
                  type="checkbox"
                  name={categoria.toLowerCase()}
                  onChange={(e) => onChange(categoria, e.target.checked, item)}
                  id={id}
                />
                <label htmlFor={id}>{item}</label>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Filtros;
