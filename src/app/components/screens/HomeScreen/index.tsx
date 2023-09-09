import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants";

function HomeScreen() {
  return (
    <main>
      <h1>Bienvenido a la app de Rick and Morty!</h1>
      <Link to={ROUTES.CHARACTERS}>Personajes</Link>
      <br />
      <Link to={ROUTES.EPISODES}>Episodios</Link>
      <br />
      <Link to={ROUTES.LOCATIONS}>Ubicaciones</Link>
    </main>
  );
}

export default HomeScreen;
