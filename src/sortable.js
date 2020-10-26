import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

import { ListGroup } from "react-bootstrap";


export default function Sortable() {
    const [state, setState] = useState([
        { id: 1, name: "shrek" },
        { id: 2, name: "fiona" },
        { id: 3, name: "donkey" },
        { id: 4, name: "cat" },
        { id: 5, name: "cookie" }
    ]);

    return (
        <ListGroup className='layers__list'>
            <ReactSortable list={state} setList={setState} animation={200} delayOnTouchStart={true} delay={5}>
                {state.map((item) => (
                    <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
                ))}
            </ReactSortable>
        </ListGroup>
    );
};