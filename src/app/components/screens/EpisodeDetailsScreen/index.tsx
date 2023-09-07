import { useParams, Link } from "react-router-dom";
import styles from "./styles.module.css"
import { useQuery } from "react-query";


function EpisodeDetailsScreen() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ['episodeDetailsData'+id],
    queryFn: () =>
      fetch(`https://rickandmortyapi.com/api/episode/${id}`).then(
        (res) => res.json(),
      ),
  })

  // const { data, error, loading } = useGetData(
  //   `https://rickandmortyapi.com/api/episode/${id}`
  // );

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
        <p>{""+error}</p>
      </main>
    );
  }

  console.log(data, error, isLoading);

  return (
    <main>
      {data && (
        <>
        <Link className={styles.backLink} to="/episodes">Volver atrás</Link>
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
