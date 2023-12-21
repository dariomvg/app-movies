import { Link } from "react-router-dom";
import InfoContext from "../contexts/InfoContext";
import { useContext } from "react";
import { image_url_500 } from "../constants/Constants";
import { movieTrailer } from "../services/MoviesTrailer";
import { filterTrailer } from "../controllers/filterTrailer";
import iconStar from "../assets/images/icon-star.png"; 
import "../estilos/seccion.css";

export function CardMovie({ movie }) {
  const { handleMovie } = useContext(InfoContext);
  const { poster_path, vote_average, original_title, release_date } = movie;

  const handle = async (movie) => {
    const movieData = await movieTrailer(movie.id);
    const trailer = filterTrailer(movieData);
    handleMovie(movieData, trailer);
  };

  return (
    <section className="card-movie">
      <img
        src={image_url_500 + poster_path}
        alt={original_title}
        loading="lazy"
        width={300}
        height={450}
        className="img-card-movie"
      />
      <div className="card-container">
        <h2 className="card-title">{original_title}</h2>
        <p>Release: {release_date}</p>
        <div className="cont-vote">
          <p className="card-vote">{vote_average}</p>
          <img src={iconStar} alt="icon star" width={15} height={15} loading="lazy" />
        </div>
        
        <Link className="card-button" onClick={() => handle(movie)} to="/movie">
          Info
        </Link>
      </div>
    </section>
  );
}
