import React, { useContext, useState } from 'react'
import tilesConf from './tiles.conf'
import { MapContext } from '../Map'
import MapMath from '../mapmath'
import projection from '../projection'

import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import TileGrid from 'ol/tilegrid/TileGrid';
import { getTopLeft } from 'ol/extent'

export default function TilesSelect() {

    console.log('til');

    const map = useContext(MapContext)

    const [tile, setTile] = useState(null)

    const changeTileHandler = e => {

        const tiled = generateTile(e.target.value);

        if (tile) map.removeLayer(tile)

        setTile(tiled)

        console.log(tile);

        map.addLayer(tiled)
        map.setView(
            new View({
                center: [0, -24e5],
                zoom: 1,
                projection,
                extent: MapMath.extent.EPSG3576
            })
        )
    }

    const generateTile = tileName => {
        return new TileLayer({
            source: new XYZ({
                url: tilesConf[tileName].URL,
                projection,
                tileGrid: new TileGrid({
                    extent: MapMath.extent.EPSG3576,
                    resolutions: MapMath.getResolution(tilesConf[tileName].resolution_levels),
                    origin: getTopLeft(MapMath.extent.EPSG3576)
                })
            })
        })
    }

    return (
        <select onChange={changeTileHandler}>
            {Object.keys(tilesConf).map(val => <option value={val} key={val}>{val}</option>)}
        </select>
    )
}
