import styles from "./styles.module.css";

function NotFound(){
    return(
        <main className={styles.notfoundcontainer}>
            <h1>Oops!</h1>
            <p>It seems the page doesn't exists</p>
        </main>
    );
}

export default NotFound;