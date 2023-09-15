import "../estilos/infoMovie.css";
import { useNavigate} from "react-router-dom";
import { useContext } from "react";
import InfoContext from "../contexts/InfoContext";
import { Constantes } from "../constants/Constants";

function InfoMovie () {
  const { image_url } = Constantes();
  const {datos} = useContext(InfoContext)
  
  const navigate = useNavigate(); 
  const handleNavigate = () => {
    navigate(-1)
  }

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
    <div>
      <div className="container">
        <div className="capa"></div>
        <img
          className="img-info"
          src={image_url + backdrop_path}
          alt={original_name}
          width={300}
          height={450}
        />
        <div className="container-info">
          <h1 className="movie-title">
          </h1>
            {original_name || original_title}
          <p className="movie-lenguage">
            <b>original language:</b> {original_language}
          </p>
          <p className="movie-out">
            <b>Release date:</b>{first_air_date || release_date}
          </p>
          <p className="movie-overview">{overview}</p>
          <button onClick={handleNavigate} className="btn-volver">Volver</button>
        </div>
        
      </div>
    </div>
  );
};


export default InfoMovie