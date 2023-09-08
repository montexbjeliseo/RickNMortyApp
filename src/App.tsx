import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./app/components/screens/HomeScreen";
import CharactersScreen from "./app/components/screens/CharactersScreen";
import EpisodesScreen from "./app/components/screens/EpisodesScreen";
import LocationsScreen from "./app/components/screens/LocationsScreen";
import CharacterDetailsScreen from "./app/components/screens/CharacterDetailsScreen";
import EpisodeDetailsScreen from "./app/components/screens/EpisodeDetailsScreen";
import LocationDetailsScreen from "./app/components/screens/LocationDetailsScreen";
import NotFound from "./app/components/screens/NotFound";
import Layout from "./app/components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ROUTES } from "./constants";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route
                            path={ROUTES.HOME}
                            element={<HomeScreen />}
                        ></Route>
                        <Route
                            path={ROUTES.CHARACTERS}
                            element={<CharactersScreen />}
                        ></Route>
                        <Route
                            path={ROUTES.EPISODES}
                            element={<EpisodesScreen />}
                        ></Route>
                        <Route
                            path={ROUTES.LOCATIONS}
                            element={<LocationsScreen />}
                        ></Route>
                        <Route
                            path={ROUTES.CHARACTER}
                            element={<CharacterDetailsScreen />}
                        ></Route>
                        <Route
                            path={ROUTES.EPISODE}
                            element={<EpisodeDetailsScreen />}
                        ></Route>
                        <Route
                            path={ROUTES.LOCATION}
                            element={<LocationDetailsScreen />}
                        ></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
