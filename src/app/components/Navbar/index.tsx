import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import favicon from "../../../assets/favicon-32x32.png";

function Navbar() {

  const location = useLocation();

  const endpoint = location.pathname.split("/")[1];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={favicon} alt="" /> Rick and Morty App
      </div>
      <ul className={styles.navigation}>
        <li className={endpoint === '' ? styles.active : ""}>
          <Link className={styles.navElement} to="/">
            Inicio
          </Link>
        </li>
        <li className={endpoint === 'characters' ? styles.active : ""}>
          <Link className={styles.navElement} to="/characters">
            Personajes
          </Link>
        </li>
        <li className={endpoint === 'episodes' ? styles.active : ""}>
          <Link className={styles.navElement} to="/episodes">
            Episodios
          </Link>
        </li>
        <li className={endpoint === 'places' ? styles.active : ""}>
          <Link className={styles.navElement} to="/places">
            Ubicaciones
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
