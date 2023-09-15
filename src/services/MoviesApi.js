import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjczMmVmZDM0YzI1ZDRiNTQ5ZTZhN2UwMDRmZTcwMSIsInN1YiI6IjY0Yjg0OTRlNGQyM2RkMDEwNjk1Y2ZjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LwDNqmYOmsq4hFCbLSoFSJQoXm-f7Mu4qcRM_z5a3DA",
  },
};

export function MoviesApi() {
  const [movies, setMovies] = useState([]);
  const [error, SetError] = useState(null);

  useEffect(() => {
    const moviesApi = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/discover/movie",
          options
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
        SetError(error);
      }
    };
    moviesApi();
  }, []);

  return { movies, error };
}
