import { useMemo, useState } from "react";
import styles from "./styles.module.css";
import CharacterCard from "../../CharacterCard";
import { Pagination } from "../../Pagination";
import { useQuery } from "react-query";
import { CharacterType } from "../../../types";
import { ENDPOINTS, QUERY_KEYS } from "../../../../constants";

type CharacterDataMemo = {
    results: CharacterType[];
    info: { pages: number; count: number };
};

function CharactersScreen() {
    const [currentPage, setCurrentPage] = useState(1);

    const { data, isLoading, error } = useQuery({
        queryKey: [QUERY_KEYS.CHARACTERS_KEY + currentPage],
        queryFn: () =>
            fetch(`${ENDPOINTS.CHARACTERS_PAGE}${currentPage}`).then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("error: " + res.statusText);
                }
            }),
    });

    const dataMemo: CharacterDataMemo = useMemo(() => {
        return data;
    }, [data]);

    function onPrevious() {
        setCurrentPage(Math.max(1, currentPage - 1));
    }

    function onNext() {
        setCurrentPage(Math.min(dataMemo.info.pages, currentPage + 1));
        console.log(currentPage);
    }

    function onGoto(page: number) {
        setCurrentPage(page);
    }

    if (isLoading) {
        return (
            <>
                <div>Cargando...</div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <div>{"Error: " + error}</div>
            </>
        );
    }

    return (
        <main>
            <h1>Characters</h1>
            <div className={styles.container}>
                {dataMemo ? (
                    dataMemo.results.map((character) => {
                        return (
                            <CharacterCard
                                key={character.id}
                                character={character}
                            />
                        );
                    })
                ) : (
                    <h1>Cargando...</h1>
                )}
            </div>
            <Pagination
                currentPage={currentPage}
                pages={dataMemo.info.pages}
                onPrevious={onPrevious}
                onNext={onNext}
                onGoto={onGoto}
            />
        </main>
    );
}

export default CharactersScreen;
