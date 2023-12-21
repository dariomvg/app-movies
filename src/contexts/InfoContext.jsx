import { createContext, useState } from "react";

const InfoContext = createContext()

export function InfoProvider({ children }) {
    const [datos, setDatos] = useState([]);
    const [datosMovie, setDatosMovie] = useState([]);
    const [trailer, setTrailer] = useState([]); 

    const handleMovie = (data, video) => {
        setDatos(data);
        setTrailer(video[0]);  
    }

    const handleData = (data) => {
        setDatos(data);  
        setTrailer([]); 
    };
    const handleForm = (data) => {
        setDatosMovie(data);
    }

    const data = { handleData, datos, handleForm, datosMovie, trailer, handleMovie }

    return (
        <InfoContext.Provider value={data}>
            {children}
        </InfoContext.Provider>
    )

}

export default InfoContext