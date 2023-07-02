import { Link } from "react-router-dom";
import styles from "./styles.module.css";

type LocationCardProps = {
    location: any;
}
export default function LocationCard(props: LocationCardProps) {
    return (
    <div className={styles.locationCard}>
        <h1>{props.location.name}</h1>
        <p>Dimensión: {props.location.dimension}</p>
        <Link className={styles.learnMore} to={`/places/${props.location.id}`}>
        Leer más
      </Link>
    </div>
  )
}
