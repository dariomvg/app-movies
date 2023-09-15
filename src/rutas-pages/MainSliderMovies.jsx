import React, {useEffect, useState, Suspense, lazy  } from "react";
import "../estilos/mainSlider.css";
import { MoviesApi } from "../services/MoviesApi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import InfoContext from "../contexts/InfoContext";
import { Constantes } from "../constants/Constants";
import imgAdelante from "../assets/images/icon-adelante.png";
import imgAtras from "../assets/images/icon-atras.png";
const Seccion = lazy(() => import("../components/Seccion"));

function MainSliderMovies() {

  const [selected, setSelected] = useState(0);
  const { movies } = MoviesApi();
  const { image_url } = Constantes();
  const {handleData} = useContext(InfoContext)
  const slider = movies.slice(0, 5);

  const next = () => {setSelected(selected === slider.length - 1 ? 0 : selected + 1)};
  const prev = () => {setSelected(selected === 0 ? slider.length - 1 : selected - 1)};

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [selected]);

  const handle = (data) => {
    handleData(data);
  };

  return (
    <div>
      <div>
        {slider.map((item, index) =>
          selected === index && (
            <div key={item.id} className="container-movie">
              <div className="buttons-movies">
                <button onClick={prev} className="funciones-btn">
                  <img src={imgAtras} width={50} height={50} alt="imagen flecha adelante" />
                </button>
                <button onClick={next} className="funciones-btn">
                  <img src={imgAdelante} width={50} height={50} alt="imagen de flecha atras" />
                </button>
              </div>
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
                    <p className="icon-estrella">★</p>
                  </div>
                </div>
                <div className="date-button-info">
                  <p>Release: {item.release_date}</p>
                  <Link
                    onClick={() => handle(item)}
                    className="btn-movie"
                    to="/movie"
                  >
                    Info
                  </Link>
                  <p className="overview">{item.overview}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <Suspense>
        <Seccion />
      </Suspense>
    </div>
  );
}

export default React.memo(MainSliderMovies)