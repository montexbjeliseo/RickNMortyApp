export type CharacterType = {
    id: string;
    name: string;
    status: string;
    species: string;
    image: string;
    location: {
        name: string;
    };
    origin: {
        name: string;
    };
};

export type EpisodeType = {
    id: string;
    name: string;
    episode: string;
    air_date: string;
};
