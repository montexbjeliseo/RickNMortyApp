import { Link, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { useQuery } from "react-query";

function CharacterDetailsScreen() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ['characterDetailsData'+id],
    queryFn: () =>
      fetch(`https://rickandmortyapi.com/api/character/${id}`).then(
        (res) => res.json(),
      ),
  });

  // const { data, error, loading } = useGetData(
  //   `https://rickandmortyapi.com/api/character/${id}`
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
          <Link className={styles.backLink} to="/characters">Volver atrás</Link>
          <h1>Personaje: {data.name}</h1>
          <img src={data.image} alt="" />
          <p>
            <strong>Status:</strong> {data.status}
          </p>
          <p>
            <b>Species:</b> {data.species}
          </p>
          <p>
            <b>Type:</b> {data.type}
          </p>
          <p>
            <b>Gender:</b> {data.gender}
          </p>
        </>
      )}
    </main>
  );
}
export default CharacterDetailsScreen;
