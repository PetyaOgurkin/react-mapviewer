import React, { useContext, useEffect, useState } from 'react'
import tilesConf from './tiles.conf'
import { MapContext } from '../Map'
import MapMath from '../mapmath'
import projection from '../projection'

import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import TileGrid from 'ol/tilegrid/TileGrid';
import { getTopLeft } from 'ol/extent'

import { DropdownButton, Dropdown } from 'react-bootstrap'

export default function TilesSelect() {

    const map = useContext(MapContext)
    const [tile, setTile] = useState({})

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

    const changeTileHandler = tileName => {

        if (tileName !== tile.name) {
            const tiled = generateTile(tileName);
            if (tile.layer) map.removeLayer(tile.layer)

            setTile({ name: tileName, layer: tiled })
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
    }

    useEffect(() => {
        changeTileHandler('topo')
    }, [])

    return (
        <DropdownButton id="dropdown-item-button" title="Tiles">
            {Object.keys(tilesConf).map((val, index) => <Dropdown.Item as="button" key={index} onClick={changeTileHandler.bind(null, val)} value={val} className={val === tile.name ? 'active' : ''}>{val}</Dropdown.Item>)}
        </DropdownButton>
    )
}
