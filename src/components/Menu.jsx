import { useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import image from "../assets/images/image-db.svg";
import cerrar from "../assets/images/iconCerrar.svg";
import menu from "../assets/images/iconMenu.svg";
import "../estilos/menu.css";

export function Menu() {
  const [isOpen, setIsOpen] = useState(true);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`navbar ${isOpen ? "active" : ""}`}>
      <div className="box-menu">
        {isOpen ? (
          <img
            src={menu}
            onClick={handleMenu}
            alt="icono de x para cerrar menu"
            className="menu-fijo"
            width={50}
            height={50}
            loading="lazy"
          />
        ) : (
          <img
            src={cerrar}
            onClick={handleMenu}
            alt="icono de menu"
            className="menu-fijo"
            width={50}
            height={50}
            loading="lazy"
          />
        )}
      </div>
      <h1 className="title-menu">App Movies TMDB</h1>
      <nav className="section-nav">
        <SearchForm />
        <div className="lista-div">
          <Link className="enlaces" to="/">
            Home
          </Link>
          <Link className="enlaces" to="/currentmovies">
            Latest releases
          </Link>
          <Link className="enlaces" to="/topmovies">
            Recommended movies
          </Link>
          <Link className="enlaces" to="/topseries">
            Recommended series
          </Link>
        </div>
        <footer className="nav-footer">
          <p>Copyright | 2023</p>
          <img
            src={image}
            alt="The Movie Database (TMDB)"
            width="150"
            height="20"
            loading="lazy"
          />
        </footer>
      </nav>
    </header>
  );
}
