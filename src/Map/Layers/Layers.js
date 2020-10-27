import React, { useState } from 'react'
import { useLayersContext } from './LayersContext'
import { ListGroup } from 'react-bootstrap';
import { ReactSortable } from 'react-sortablejs';

export default function Layers() {

    const { listOfLayers, setListOfLayers } = useLayersContext();

    // const [state, setState] = useState(listOfLayers)


    return (
        <ListGroup className='layers__list'>
            <ReactSortable list={listOfLayers} setList={setListOfLayers} animation={200} delayOnTouchStart={true} delay={5}>
                {listOfLayers.map((item, i) => (
                    <ListGroup.Item key={i}>{item.title}</ListGroup.Item>
                ))}
            </ReactSortable>
        </ListGroup>
    )
}