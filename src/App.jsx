import "./estilos/App.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Menu } from "./components/Menu";
import { InfoProvider } from "./contexts/InfoContext";
import { Loader } from "./components/Loader";
const MainSliderMovies = lazy(() => import("./rutas-pages/MainSliderMovies"));
const InfoMovie = lazy(() => import("./rutas-pages/InfoMovie"));
const SearchMovie = lazy(() => import("./rutas-pages/SearchMovie"));
const Movies = lazy(() => import("./rutas-pages/Movies"));
const Series = lazy(() => import("./rutas-pages/Series"));
const TopMovies = lazy(() => import("./rutas-pages/TopMovies"));

function App() {
  return (
    <InfoProvider>
      <div className="wrapper">
        <Suspense fallback={<Loader />}>
          <HashRouter>
            <Menu />
            <Routes>
              <Route exact path="/" element={<MainSliderMovies />} />
              <Route exact path="/movie" element={<InfoMovie />} />
              <Route exact path="/search" element={<SearchMovie />} />
              <Route exact path="/currentmovies" element={<Movies />} />
              <Route exact path="/topseries" element={<Series />} />
              <Route exact path="/topmovies" element={<TopMovies />} />
              <Route
                path="*"
                element={
                  <h1 style={{ textAlign: "center" }}>Page Not Found</h1>
                }
              />
            </Routes>
          </HashRouter>
        </Suspense>    
      </div> 
    </InfoProvider>
  );
}

export default App;
