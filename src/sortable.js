import React, { useState } from 'react';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { ListGroup } from 'react-bootstrap'


const SortableItem = sortableElement(({ value }) => <ListGroup.Item>{value}</ListGroup.Item>);

const SortableContainer = sortableContainer(({ children }) => {
    return <ListGroup>{children}</ListGroup>;
});


export default function Sortable() {
    const [layers, setLayers] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'])

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setLayers(arrayMove(layers, oldIndex, newIndex));
    };

    return (
        <SortableContainer onSortEnd={onSortEnd}>
            {layers.map((value, index) => (
                <SortableItem key={`item-${value}`} index={index} value={value} />
            ))}
        </SortableContainer>
    );
}