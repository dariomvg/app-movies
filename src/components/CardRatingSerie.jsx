import InfoContext from "../contexts/InfoContext";
import { image_url_500 } from "../constants/Constants";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "../estilos/seccion.css";

export function CardRatingSerie({ serie }) {
  const { handleData } = useContext(InfoContext);
  const { first_air_date, poster_path, original_name } = serie;

  const handle = async (serie) => {
    handleData(serie);
  };

  return (
    <section className="card-movie">
      <img
        loading="lazy"
        src={image_url_500 + poster_path}
        alt={original_name}
        width={300}
        height={450}
        className="img-serie"
      />
      <div className="card-container">
        <h2 className="card-title">{original_name}</h2>
        <p>Release: {first_air_date}</p>
        <Link onClick={() => handle(serie)} className="card-button" to="/movie">
          Info
        </Link>
      </div>
    </section>
  );
}
