import React, { useContext, useState, useEffect } from 'react'
import { CatalogContext } from '../../Catalog/CatalogContext'
import { ListGroup } from 'react-bootstrap'
import { ReactSortable } from 'react-sortablejs'




export default function Layers() {

    const context = useContext(CatalogContext)

    const [state, setState] = useState(context)

    console.log(context, 'context from layers');
    console.log(state, 'state from layers');

    return (
        <div>
            <ListGroup className='layers__list'>
                <ReactSortable list={state} setList={setState} animation={200} delayOnTouchStart={true} delay={5}>
                    {state.filter((item) => item.onMap).map((item, i) => (
                        <ListGroup.Item key={i}>{item.title}</ListGroup.Item>
                    ))}
                </ReactSortable>
            </ListGroup>
        </div>
    )
}
