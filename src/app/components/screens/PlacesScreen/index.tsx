import { useMemo, useState } from "react";
import styles from "./styles.module.css";
import LocationCard from "../../LocationCard";
import { Pagination } from "../../Pagination";
import { useQuery } from "react-query";
import { LocationType } from "../../../types";
import { ENDPOINTS, QUERY_KEYS } from "../../../../constants";

type LocationDataMemo = {
    results: LocationType[];
    info: { pages: number; count: number };
};

function PlacesScreen() {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, error } = useQuery({
        queryKey: [QUERY_KEYS.LOCATIONS_KEY + currentPage],
        queryFn: () =>
            fetch(
                `${ENDPOINTS.LOCATIONS_PAGE}${currentPage}`
            ).then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("error: " + res.statusText);
                }
            }),
    });

    const dataMemo: LocationDataMemo = useMemo(() => {
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
            <h1>Ubicaciones</h1>
            <div className={styles.container}>
                {dataMemo ? (
                    dataMemo.results.map((location) => {
                        return (
                            <LocationCard
                                key={location.id}
                                location={location}
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

export default PlacesScreen;
