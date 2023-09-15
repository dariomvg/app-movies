import { useContext, useState } from "react";
import "../estilos/menu.css";
import { Link } from "react-router-dom";
import InfoContext from "../contexts/InfoContext";
import { SearchMovieApi } from "../services/SearchMovieApi";
import React from "react";

function SearchForm() {

  const [query, setQuery] = useState("");
  const { handleForm } = useContext(InfoContext)

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query === "") {
      return;
    }
    const newMovie = await SearchMovieApi(query)
    handleForm(newMovie)
    setQuery("");
  };

  return (
    <div>
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
          <button onClick={(e) => handleSearch(e)} className="input-send">
            <Link className="link-form" to="/search">
              Search
            </Link>
          </button>
        )}
      </form>
    </div>
  );
}

export default React.memo(SearchForm)