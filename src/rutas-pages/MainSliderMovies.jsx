import React, { useEffect, useState, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import InfoContext from "../contexts/InfoContext";
import { image_url } from "../constants/Constants";
import { MoviesApi } from "../services/MoviesApi";
import imgAdelante from "../assets/images/icon-adelante.png";
import imgAtras from "../assets/images/icon-atras.png";
import iconStar from "../assets/images/icon-star.png"
import { movieTrailer } from "../services/MoviesTrailer";
import { filterTrailer } from "../controllers/filterTrailer";
const SeccionTodos = lazy(() => import("../components/SeccionTodos"));
import "../estilos/mainSlider.css";

function MainSliderMovies() {
  const [selected, setSelected] = useState(0);
  const { movies } = MoviesApi();
  const { handleMovie } = useContext(InfoContext);
  const slider = movies.slice(0, 5);

  const next = () => {
    setSelected(selected === slider.length - 1 ? 0 : selected + 1);
  };
  const prev = () => {
    setSelected(selected === 0 ? slider.length - 1 : selected - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [selected]);

  const handle = async (movie) => {
    const movieData = await movieTrailer(movie.id);
    const trailer = filterTrailer(movieData);
    handleMovie(movieData, trailer);
  };

  return (
    <section className="container-slider">
      <section>
        <div className="buttons-movies">
          <button onClick={prev} className="funciones-btn">
            <img
              src={imgAtras}
              width={50}
              height={50}
              alt="imagen flecha adelante"
              loading="lazy"
            />
          </button>
          <button onClick={next} className="funciones-btn">
            <img
              src={imgAdelante}
              width={50}
              height={50}
              alt="imagen de flecha atras"
              loading="lazy"
            />
          </button>
        </div>
        {slider.map(
          (item, index) =>
            selected === index && (
              <section key={item.id} className="container-movie">
                <img
                  className="img-slider"
                  width={"100%"}
                  height={"100%"}
                  src={image_url + item.backdrop_path}
                  alt={item.original_title}
                  loading="lazy"
                />
                <div className="info-movies">
                  <div className="title-votes">
                    <h1>{item.original_title}</h1>
                    <div className="vote">
                      <p>{item.vote_average}</p>
                      <img src={iconStar} alt="icon star" className="icon-estrella" width={15} height={15} loading="lazy"/>
                    </div>
                  </div>
                  <div className="date-button-info">
                    <p>Release: {item.release_date}</p>
                    <Link
                      onClick={() => handle(item)}
                      className="btn-movie"
                      to="/movie">
                      Info
                    </Link>
                    <p className="overview">{item.overview}</p>
                  </div>
                </div>
              </section>
            ))}
      </section>
      <Suspense>
        <SeccionTodos />
      </Suspense>
    </section>
  );
}

export default React.memo(MainSliderMovies);
