import { createContext, useState } from "react";

const InfoContext = createContext()

export function InfoProvider({ children }) {
    const [datos, setDatos] = useState([]);
    const [datosMovie, setDatosMovie] = useState([]);

    const handleData = (data) => {
        setDatos(data);
    };
    const handleForm = (data) => {
        setDatosMovie(data)
    }

    const data = { handleData, datos, handleForm, datosMovie }

    return (
        <InfoContext.Provider value={data}>
            {children}
        </InfoContext.Provider>
    )

}

export default InfoContext