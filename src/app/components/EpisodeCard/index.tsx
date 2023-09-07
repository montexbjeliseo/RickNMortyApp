import React from "react";
import { EpisodeType } from "../../types";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

type EpisodeCardProps = {
  episode: EpisodeType;
};

export const EpisodeCard: React.FC<EpisodeCardProps> = ({episode}) =>{
  return (
    <div className={styles.episodeCard}>
      <h1>{episode.name}</h1>
      <p className={styles.episodeText}>Episodio: {episode.episode}</p>
      <p>Al aire: {episode.air_date}</p>
      <Link className={styles.learnMore} to={`/episodes/${episode.id}`}>
        Leer más
      </Link>
    </div>
  );
}

export default EpisodeCard;
