import React, { useState, useContext, useEffect } from 'react'

const MapContext = React.createContext()

export const useMap = () => useContext(MapContext)

export const MapProvider = ({ children }) => {

    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])

    const [map, setMap] = useState(false)

    return (
        <MapContext.Provider>
            {children}
        </MapContext.Provider>
    )
}
