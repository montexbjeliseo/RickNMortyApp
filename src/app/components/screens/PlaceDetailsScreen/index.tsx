import { Link, useParams } from "react-router-dom";

import styles from "./styles.module.css";
import { useGetData } from "../../../hooks/useGetDataR";
function PlaceDetailsScreen() {
  const { id } = useParams();

  const { data, error, loading } = useGetData(
    `https://rickandmortyapi.com/api/location/${id}`
  );

  if (loading) {
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
        <p>{error}</p>
      </main>
    );
  }

  console.log(data, error, loading);

  return (
    <main>
      {data && (
        <>
          <Link className={styles.backLink} to="/places">
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
            <b>Type:</b> {data.type}
          </p>
        </>
      )}
    </main>
  );
}

export default PlaceDetailsScreen;
