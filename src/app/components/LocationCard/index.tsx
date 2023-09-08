import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { LocationType } from "../../types";
import { ROUTES } from "../../../constants";

type LocationCardProps = {
    location: LocationType;
};
export default function LocationCard(props: LocationCardProps) {
    return (
        <div className={styles.locationCard}>
            <h1>{props.location.name}</h1>
            <p>Dimensión: {props.location.dimension}</p>
            <Link
                className={styles.learnMore}
                to={`${ROUTES.LOCATION.replace(ROUTES.ID, props.location.id)}`}
            >
                Leer más
            </Link>
        </div>
    );
}
