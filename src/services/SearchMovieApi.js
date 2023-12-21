import { api_key, base_url } from "../constants/Constants";

export const SearchMovieApi = async (query) => {
    try {
      const res = await fetch(`${base_url}?api_key=${api_key}&query=${query}`),
        data = await res.json();
        return data.results

    } catch (error) {
      console.log(error);
    }
  };
  