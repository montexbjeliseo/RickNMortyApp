import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import favicon from "../../../assets/favicon-32x32.png";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={favicon} alt="" /> Rick and Morty App
      </div>
      <ul className={styles.navigation}>
        <li>
          <Link className={styles.navElement} to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className={styles.navElement} to="/characters">
            Personajes
          </Link>
        </li>
        <li>
          <Link className={styles.navElement} to="/episodes">
            Episodios
          </Link>
        </li>
        <li>
          <Link className={styles.navElement} to="/places">
            Ubicaciones
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
