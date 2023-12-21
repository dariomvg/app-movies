import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import InfoContext from "../contexts/InfoContext";
import { image_url, url_trailer } from "../constants/Constants";
import ReactPlayer from "react-player/youtube";
import "../estilos/infoMovie.css";

function InfoMovie() {
  const { datos, trailer } = useContext(InfoContext);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };

  const {
    backdrop_path,
    original_name,
    original_language,
    first_air_date,
    overview,
    original_title,
    release_date,
  } = datos;

  return (
    <section className="container">
      <div className="capa"></div>
      <img
        className="img-info"
        src={image_url + backdrop_path}
        alt={original_name}
        width={300}
        height={450}
      />
      <div className="container-info">
        {trailer && (
          <ReactPlayer
            url={`${url_trailer}${trailer.key}`}
            controls
            className="container-video"
          />
        )}
        <h1 className="movie-title">{original_name || original_title}</h1>
        <p className="movie-lenguage">
          Original language: <b>{original_language}</b> 
        </p>
        <p className="movie-out">
          Release date: <b>{first_air_date || release_date}</b>
        </p>
        <p className="movie-overview">{overview}</p>
        <button onClick={handleNavigate} className="btn-volver">
          Return
        </button>
      </div>
    </section>
  );
}

export default InfoMovie;
