import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import CharacterCard from "../../CharacterCard";
import { Pagination } from "../../Pagination";

function CharactersScreen() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [characters, setCharacters] = useState();

  useEffect(() => {
    requestCharacters();
  }, [currentPage]);

  async function requestCharacters() {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
      const json = await res.json();
      console.log(json.info);

      setPages(json.info.pages);
      setCharacters(json.results);

    } catch (e) {
      console.error(e);
    }
  }

  function onPreview(){
    setCurrentPage(Math.max(1, currentPage - 1));
  }

  function onNext(){
    setCurrentPage(Math.min(pages, currentPage + 1));
    console.log(currentPage);
  }

  function onGoto(page: number){
    setCurrentPage(page);
  }

  return (
    <main>
      <h1>Characters</h1>
      <div className={styles.container}>
        {characters ? (
          characters.map((character) => {
            return <CharacterCard key={character.id} character={character} />;
          })
        ) : (
          <h1>Cargando...</h1>
        )}
      </div>
      <Pagination currentPage={currentPage} pages={pages} onPreview={onPreview} onNext={onNext} onGoto={onGoto}/>
    </main>
  );
}

export default CharactersScreen;