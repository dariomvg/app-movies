import InfoContext from "../contexts/InfoContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { image_url_500 } from "../constants/Constants";
import "../estilos/seccion.css";

export function CardRatingMovie({ itemMovie }) {
  const { handleData } = useContext(InfoContext);
  const { poster_path, original_title, release_date } = itemMovie;

  const handle = async (movie) => {
    handleData(movie);
  };

  return (
    <section className="card-movie">
      <img
        loading="lazy"
        src={image_url_500 + poster_path}
        alt={original_title}
        width={300}
        height={450}
      />
      <div className="card-container">
        <h2 className="card-title">{original_title}</h2>
        <p>Release: {release_date}</p>
        <Link
          onClick={() => handle(itemMovie)}
          className="card-button"
          to="/movie">
          Info
        </Link>
      </div>
    </section>
  );
}
