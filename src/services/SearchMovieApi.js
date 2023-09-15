import { Constantes } from "../constants/Constants";

const key = "cddb2747ae4c061684b91d3240dded53";
const { base_url } = Constantes();

export const SearchMovieApi = async (query) => {
    try {
      const res = await fetch(`${base_url}?api_key=${key}&query=${query}`),
        data = await res.json();
        return data.results

    } catch (error) {
      console.log(error);
    }
  };