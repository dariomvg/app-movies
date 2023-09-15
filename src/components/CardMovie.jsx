import "../estilos/seccion.css";
import { Constantes } from "../constants/Constants";
import { Link } from "react-router-dom";
import InfoContext from "../contexts/InfoContext";
import { useContext } from "react";


export function CardMovie({ movie }) {

  const {handleData} = useContext(InfoContext)
  const { poster_path, vote_average, original_title, release_date } = movie;
  const { image_url_500 } = Constantes();


  const handle = (data) => {
    handleData(data);
  };
  

  return (
    <div className="card-movie">
      <img
        src={image_url_500 + poster_path}
        alt={original_title}
        loading="lazy"
        width={300}
        height={450}
      />
      <div className="card-container">
        <div className="card-info">
          <h2 className="card-title">{original_title}</h2>
        </div>
        <p>Release: {release_date}</p>
        <p className="card-vote">{vote_average} ★</p>
        <Link
          className="card-button"
          onClick={() => handle(movie)}
          to="/movie"
        >
          Info
        </Link>
      </div>
    </div>
  );
};

