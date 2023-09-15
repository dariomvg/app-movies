import { Constantes } from "../constants/Constants";
import "../estilos/seccion.css";

function TopMovies() {
  const { image_url_500, ratingMovies } = Constantes();

  return (
    <div className="seccion1">
        <h1 className="title-movies-enl">Top movies...</h1>
      <section className="seccion">
        {ratingMovies
          ? ratingMovies.results.map((item) => (
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

export default TopMovies