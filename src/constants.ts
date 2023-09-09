export const QUERY_KEYS = {
    CHARACTERS_KEY: "charactersKey",
    CHARACTER_KEY: "characterKey",

    EPISODES_KEY: "episodesKey",
    EPISODE_KEY: "episodeKey",

    LOCATIONS_KEY: "locationsKey",
    LOCATION_KEY: "locationKey",
};

export const BASE_URL = "https://rickandmortyapi.com/api";

export const ENDPOINTS = {
    CHARACTER: BASE_URL + "/character/",
    CHARACTERS_PAGE: BASE_URL + "/character?page=",

    EPISODE: BASE_URL + "/episode/",
    EPISODES_PAGE: BASE_URL + "/episode?page=",

    LOCATION: BASE_URL + "/location/",
    LOCATIONS_PAGE: BASE_URL + "/location?page=",
};

export const RESOURCE_NAMES = {
    CHARACTER: 'character',
    EPISODE: 'episode',
    LOCATION: 'location',
}

export const ROUTES = {
    HOME: "/",
    ID: ":id",
    CHARACTER: "/character/:id",
    CHARACTERS: "/characters",
    EPISODE: "/episode/:id",
    EPISODES: "/episodes",
    LOCATION: "/location/:id",
    LOCATIONS: "/locations",
};

export const URL_PARAMS = {
    PAGE: 'page',
}