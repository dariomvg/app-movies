import "../estilos/searchMovie.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import InfoContext from "../contexts/InfoContext";
import { Constantes } from "../constants/Constants";

function SearchMovie() {
  const { image_url_500 } = Constantes();
  const { datosMovie, handleData } = useContext(InfoContext);

  const handle = (data) => {
    handleData(data);
  };

  return (
    <div className="seccion-1">
      <div className="seccion-header">
        <h1 className="title-result">results</h1>
        <Link to="/" className="btn-principal">
          ⮌ return
        </Link>
      </div>
      <div className="seccion-2">
        {datosMovie.length > 0 ? (
          datosMovie.map((movie) => (
            <div key={movie.id} className="card-movie-search">
              <img
                src={image_url_500 + movie.poster_path}
                alt={movie.original_title}
                width={300}
                height={450}
                loading="lazy"
                className="card-img-search"
              />
              <div className="card-container-search">
                <div className="card-info-search">
                  <h2 className="card-title-search">{movie.original_title}</h2>
                </div>
                <p>
                  <b>Release:</b> {movie.release_date}
                </p>
                <Link
                  className="card-button-search"
                  onClick={() => handle(movie)}
                  to="/movie">
                  Info
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="seccion-1">
            <div className="seccion2">
              <h1 className="title-result">no results</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchMovie