import React, { useState } from 'react'
import { Button, Modal, ListGroup } from 'react-bootstrap';
import { useLayersContext } from '../Map/Layers/LayersContext';
import layers from './catalog.conf'


export default function Catalog() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [checkedList, setCheckedList] = useState(layers)


    const { addLayer } = useLayersContext()


    const checkToggleHandler = event => {
        checkedList.forEach(element => {
            if (element.title === event.target.title) {
                element.checked = !element.checked
                event.target.classList.toggle('active');
            }
        })
        setCheckedList(checkedList)
    }

    const getClasses = element => {
        const classes = []
        element.checked && classes.push('active')
        element.onMap && classes.push('disabled')
        return classes.join(' ')
    }

    const applyHandle = () => {
        checkedList.forEach(element => {
            if (element.checked && !element.onMap) {
                element.onMap = !element.onMap
                element.checked = !element.checked
                addLayer(element)
            }
        })
        setCheckedList(checkedList);
        setShow(false);

    }



    return (
        <>
            <Button variant="primary" onClick={handleShow}>Add layers</Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        {checkedList.map((e, i) => <ListGroup.Item onClick={checkToggleHandler} title={e.title} key={i} className={getClasses(e)}>{e.title}</ListGroup.Item>)}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={applyHandle}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
