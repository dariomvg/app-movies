import { ratingSeries } from "../constants/Constants";
import { CardRatingSerie } from "../components/CardRatingSerie";
import "../estilos/seccion.css";

function Series() {
  return (
    <section className="seccion1">
      <h1 className="title-movies-enl">Series...</h1>
      <section className="seccion">
        {ratingSeries
          ? ratingSeries.results.map((serie) => <CardRatingSerie key={serie.id} serie={serie} />)
          : null}
      </section>
    </section>
  );
}

export default Series;
