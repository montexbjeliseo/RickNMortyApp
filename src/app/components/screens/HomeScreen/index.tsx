import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <main>
      <h1>Bienvenido a la app de Rick and Morty!</h1>
      <Link to="/characters">Personajes</Link>
      <br />
      <Link to="/episodes">Episodios</Link>
      <br />
      <Link to="/places">Ubicaciones</Link>
    </main>
  );
}

export default HomeScreen;
