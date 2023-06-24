import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./app/components/screens/HomeScreen";
import CharactersScreen from "./app/components/screens/CharactersScreen";
import EpisodesScreen from "./app/components/screens/EpisodesScreen";
import PlacesScreen from "./app/components/screens/PlacesScreen";
import CharacterDetailsScreen from "./app/components/screens/CharacterDetailsScreen";
import EpisodeDetailsScreen from "./app/components/screens/EpisodeDetailsScreen";
import PlaceDetailsScreen from "./app/components/screens/PlaceDetailsScreen";
import NotFound from "./app/components/screens/NotFound";
import Layout from "./app/components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/characters" element={<CharactersScreen />}></Route>
          <Route path="/episodes" element={<EpisodesScreen />}></Route>
          <Route path="/places" element={<PlacesScreen />}></Route>
          <Route
            path="/characters/:id"
            element={<CharacterDetailsScreen />}
          ></Route>
          <Route
            path="/episodes/:id"
            element={<EpisodeDetailsScreen />}
          ></Route>
          <Route path="/places/:id" element={<PlaceDetailsScreen />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
