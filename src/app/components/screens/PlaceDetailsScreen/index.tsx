import { Link, useParams } from "react-router-dom";

import styles from "./styles.module.css";
import { useQuery } from "react-query";
import { ENDPOINTS, QUERY_KEYS, ROUTES } from "../../../../constants";
function PlaceDetailsScreen() {
    const { id } = useParams();

    const { isLoading, error, data } = useQuery({
        queryKey: [QUERY_KEYS.LOCATION_KEY + id],
        queryFn: () =>
            fetch(`${ENDPOINTS.LOCATION}${id}`).then(
                (res) => res.json()
            ),
    });

    if (isLoading) {
        return (
            <main>
                <h1>Cargando...</h1>
            </main>
        );
    }

    if (error) {
        return (
            <main>
                <h1>Error en la petición!</h1>
                <p>{"Error: " + error}</p>
            </main>
        );
    }

    return (
        <main>
            {data && (
                <>
                    <Link className={styles.backLink} to={ROUTES.LOCATIONS}>
                        Volver atrás
                    </Link>
                    <h1>{data.name}</h1>
                    <p>
                        <strong>Dimension:</strong> {data.dimension}
                    </p>
                    <p>
                        <b>Type:</b> {data.type}
                    </p>
                    <p>
                        <b>Created:</b> {data.created}
                    </p>
                </>
            )}
        </main>
    );
}

export default PlaceDetailsScreen;
