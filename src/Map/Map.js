import React, { useState, useContext, useEffect } from 'react'
import './Map.css';

import 'ol/ol.css';
import Map from 'ol/Map';

const map = new Map();

export const MapContext = React.createContext(map)

function MapViewer() {

    useEffect(() => {
        console.log('map rendered');
        map.setTarget('map')
    })

    return (
        <MapContext.Provider value={map}>
            <div id="map"></div>
        </MapContext.Provider>
    )
}


export default MapViewer