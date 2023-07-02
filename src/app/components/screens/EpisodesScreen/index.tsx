import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Pagination } from "../../Pagination";
import EpisodeCard from "../../EpisodeCard";

function EpisodesScreen() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [episodes, setEpisodes] = useState();

  useEffect(() => {
    requestEpisodes();
  }, [currentPage]);

  async function requestEpisodes() {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/episode?page=${currentPage}`
      );
      const json = await res.json();
      console.log(json.info);

      setPages(json.info.pages);
      setEpisodes(json.results);
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
      <h1>Episodes</h1>
      <div className={styles.container}>
        {episodes ? (
          episodes.map((episode) => {
            return <EpisodeCard key={episode.id} episode={episode} />;
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

export default EpisodesScreen;
