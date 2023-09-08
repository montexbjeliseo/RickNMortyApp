import { useParams, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useQuery } from "react-query";
import { ENDPOINTS, QUERY_KEYS } from "../../../../constants";

function EpisodeDetailsScreen() {
    const { id } = useParams();

    const navigate = useNavigate();

    const { isLoading, error, data } = useQuery({
        queryKey: [QUERY_KEYS.EPISODE_KEY + id],
        queryFn: () =>
            fetch(`${ENDPOINTS.EPISODE}${id}`).then((res) => res.json()),
    });

    const goBack = () => {
        navigate(-1);
    };

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
                <p>{"" + error}</p>
            </main>
        );
    }

    return (
        <main>
            {data && (
                <>
                    <button className={styles.backLink} onClick={goBack}>
                        Volver atrás
                    </button>
                    <h1>{data.name}</h1>
                    <p>
                        <b>Episodio:</b> {data.episode}
                    </p>
                    <p>
                        <b>Estrenado:</b> {data.air_date}
                    </p>
                </>
            )}
        </main>
    );
}

export default EpisodeDetailsScreen;
