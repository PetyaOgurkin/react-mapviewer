import React, { useContext } from 'react'
import { MapContext } from './Map'

export default function Click() {

    const map = useContext(MapContext);


    const logger = () => {
        console.log(map);
    }


    return (
        <div>
            <button onClick={logger}>click</button>
        </div>
    )
}
