import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import InfoContext from "../contexts/InfoContext";
import { SearchMovieApi } from "../services/SearchMovieApi";
import React from "react";
import "../estilos/menu.css";

function SearchForm() {
  const [query, setQuery] = useState("");
  const { handleForm } = useContext(InfoContext);

  const handleSearch = async () => {
    if (query === "") {
      return;
    } else {
      const newMovie = await SearchMovieApi(query);
      handleForm(newMovie);
      setQuery("");
    }
  };

  return (
    <form className="formulario">
      <input
        type="text"
        placeholder="Search movie..."
        className="input-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      {query !== "" && (
        <button onClick={handleSearch} className="input-send">
          <Link className="link-form" to="/search">
            Search
          </Link>
        </button>
      )}
    </form>
  );
}

export default React.memo(SearchForm);
