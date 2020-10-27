import React, { useContext, useState } from 'react'


const LayersContext = React.createContext()

export const useLayersContext = () => {
    return useContext(LayersContext);
}


export function LayersContextProvider({ children }) {

    const [listOfLayers, setListOfLayers] = useState([])

    console.log(listOfLayers);
    

    const addLayer = (layer) => {
        setListOfLayers([...listOfLayers, layer])
    }

    const removeLayer = () => {
    }

    return (
        <LayersContext.Provider value={{
            listOfLayers, setListOfLayers, addLayer, removeLayer
        }}>
            {children}
        </LayersContext.Provider>
    )
}
