import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import LocationCard from "../../LocationCard";
import { Pagination } from "../../Pagination";

function PlacesScreen() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [locations, setLocations] = useState<any[]>();

  useEffect(() => {
    console.log(currentPage);
    requestCharacters();
  }, [currentPage]);

  async function requestCharacters() {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/location?page=${currentPage}`
      );
      const json = await res.json();

      setPages(json.info.pages);
      setLocations(json.results);
    } catch (e) {
      console.error(e);
    }
  }

  function onPreview() {
    setCurrentPage(Math.max(1, currentPage - 1));
  }

  function onNext() {
    setCurrentPage(Math.min(pages, currentPage + 1));
    console.log(currentPage);
  }

  function onGoto(page: number) {
    setCurrentPage(page);
  }

  return (
    <main>
      <h1>Ubicaciones</h1>
      <div className={styles.container}>
        {locations ? (
          locations.map((location) => {
            return <LocationCard key={location.id} location={location} />;
          })
        ) : (
          <h1>Cargando...</h1>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        pages={pages}
        onPreview={onPreview}
        onNext={onNext}
        onGoto={onGoto}
      />
    </main>
  );
}

export default PlacesScreen;
