import { useState, useMemo } from "react";
import styles from "./styles.module.css";
import { Pagination } from "../../Pagination";
import EpisodeCard from "../../EpisodeCard";
import { useQuery } from "react-query";
import { EpisodeType } from "../../../types";
import { ENDPOINTS, QUERY_KEYS, URL_PARAMS } from "../../../../constants";
import { useLocation, useNavigate } from "react-router-dom";

type EpisodeDataMemo = {
    results: EpisodeType[];
    info: { pages: number; count: number };
};

function EpisodesScreen() {
    const { search, pathname } = useLocation();

    const pageParam = parseInt(
        new URLSearchParams(search).get(URL_PARAMS.PAGE) as string
    );

    const [currentPage, setCurrentPage] = useState<number>(
        !isNaN(pageParam) ? pageParam : 1
    );

    const navigate = useNavigate();

    const { data, isLoading, error } = useQuery({
        queryKey: [QUERY_KEYS.EPISODES_KEY + currentPage],
        queryFn: () =>
            fetch(`${ENDPOINTS.EPISODES_PAGE}${currentPage}`).then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("error: " + res.statusText);
                }
            }),
    });

    const dataMemo: EpisodeDataMemo = useMemo(() => {
        return data;
    }, [data]);

    function onPrevious() {
        const previousPage = Math.max(1, currentPage - 1);
        setCurrentPage(previousPage);
        navigate(`${pathname}?${URL_PARAMS.PAGE}=${previousPage}`);
    }

    function onNext() {
        const nextPage = Math.min(dataMemo.info.pages, currentPage + 1);
        setCurrentPage(nextPage);
        navigate(`${pathname}?${URL_PARAMS.PAGE}=${nextPage}`);
    }

    function onGoto(page: number) {
        setCurrentPage(page);
        navigate(`${pathname}?${URL_PARAMS.PAGE}=${page}`);
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
                <div>Error: {"" + error}</div>
            </>
        );
    }

    return (
        <main>
            <h1>Episodes</h1>
            <div className={styles.container}>
                {dataMemo ? (
                    dataMemo.results.map((episode) => {
                        return (
                            <EpisodeCard key={episode.id} episode={episode} />
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

export default EpisodesScreen;
