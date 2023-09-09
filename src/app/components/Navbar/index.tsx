import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import favicon from "../../../assets/favicon-32x32.png";
import { RESOURCE_NAMES, ROUTES } from "../../../constants";

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
        <li className={endpoint.includes(RESOURCE_NAMES.CHARACTER) ? styles.active : ""}>
          <Link className={styles.navElement} to={ROUTES.CHARACTERS}>
            Personajes
          </Link>
        </li>
        <li className={endpoint.includes(RESOURCE_NAMES.EPISODE) ? styles.active : ""}>
          <Link className={styles.navElement} to={ROUTES.EPISODES}>
            Episodios
          </Link>
        </li>
        <li className={endpoint.includes(RESOURCE_NAMES.LOCATION) ? styles.active : ""}>
          <Link className={styles.navElement} to={ROUTES.LOCATIONS}>
            Ubicaciones
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
