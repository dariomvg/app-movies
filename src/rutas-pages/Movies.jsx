import { Constantes } from "../constants/Constants";
import "../estilos/seccion.css";
import { MoviesApi } from "../services/MoviesApi";

function Movies() {
  const { image_url_500 } = Constantes();
  const {movies} = MoviesApi();

  return (
    <div className="seccion1">
        <h1 className="title-movies-enl">Movies...</h1>
      <section className="seccion">
        {movies
          ? movies.map((item) => (
              <div key={item.id} className="card-movie">
                <img
                  src={image_url_500 + item.poster_path}
                  alt={item.original_title}
                  loading="lazy"
                  width={300}
                  height={450}
                />
                <div className="card-container">
                  <div className="card-info">
                    <h2 className="card-title">{item.original_title}</h2>
                  </div>
                  <p>Release: {item.release_date}</p>
                  <p className="card-vote">{item.vote_average} ★</p>
                </div>
              </div>
            ))
          : null}
      </section>
    </div>
  );
}

export default Movies