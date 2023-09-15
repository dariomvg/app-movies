import "../estilos/seccion.css";
import { Link } from "react-router-dom";
import InfoContext from "../contexts/InfoContext";
import { useContext } from "react";
import { Constantes } from "../constants/Constants";

export function CardRatingSerie({ serie }) {

    const {handleData} = useContext(InfoContext)
    const { image_url_500 } = Constantes();
    const { first_air_date, poster_path, original_name } = serie;

    const handle = (data) => {
        handleData(data);
    };

    return (
        <div className="card-movie">
            <img
                loading="lazy"
                src={image_url_500 + poster_path}
                alt={original_name}
                width={300}
                height={450}
            />
            <div className="card-container">
                <div className="card-info">
                    <h2 className="card-title">{original_name}</h2>
                </div>
                <p>Release: {first_air_date}</p>
                <Link
                    onClick={() => handle(serie)}
                    className="card-button"
                    to="/movie"
                >
                    Info
                </Link>
            </div>
        </div>
    )
}