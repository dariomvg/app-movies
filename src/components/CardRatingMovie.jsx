import "../estilos/seccion.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import InfoContext from "../contexts/InfoContext";
import { Constantes } from "../constants/Constants";

export function CardRatingMovie({ itemMovie }) {

    const {handleData} = useContext(InfoContext)
    const {poster_path,original_title,release_date } = itemMovie
    const {image_url_500} = Constantes();
    

    const handle = (data) => {
        handleData(data);
    };

    return (
        <div className="card-movie">
            <img
                loading="lazy"
                src={image_url_500 + poster_path}
                alt={original_title}
                width={300}
                height={450}
            />
            <div className="card-container">
                <div className="card-info">
                    <h2 className="card-title">{original_title}</h2>
                </div>
                <p>Release: {release_date}</p>

                <Link
                    onClick={() => handle(itemMovie)}
                    className="card-button"
                    to="/movie"
                >
                    Info
                </Link>
            </div>
        </div>
    )
}