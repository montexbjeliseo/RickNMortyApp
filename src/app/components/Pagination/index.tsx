import styles from "./styles.module.css";

type PaginationProps = {
  currentPage: number;
  pages: number;
  onPreview: () => void;
  onNext: () => void;
  onGoto: (page: number) => void;
};

export const Pagination = (info: PaginationProps) => {
  function generateLinks() {
    const initial = Math.max(info.currentPage - 2, 1);
    const ending = Math.min(initial + 5, info.pages);
    const list = [];
    for (let i = initial; i < ending + 1; i++) {
      list.push(i);
    }
    return (
      <>
        {list.map((p) => {
          return (
            <li key={`pagination-${p}`}>
              <a
                href={`?page=${p}`}
                onClick={(e) => {
                  info.onGoto(p);
                }}
                className={info.currentPage == p ? styles.active : ""}
              >
                {p}
              </a>
            </li>
          );
        })}
      </>
    );
  }

  return (
    <nav className={styles.pagination}>
      <ul>
        <li>
          <a
            href="#"
            onClick={() => {
              info.onPreview();
            }}
          >
            Anterior
          </a>
        </li>
        {generateLinks()}
        <li>
          <a
            href="#"
            onClick={() => {
              info.onNext();
            }}
          >
            Siguiente
          </a>
        </li>
      </ul>
    </nav>
  );
};
