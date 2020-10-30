import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const ListHome = (props) => {
    return (

        <ListGroup>
            <ListGroup.Item>{props.top}</ListGroup.Item>
            <ListGroup.Item>{props.top2}</ListGroup.Item>
            <ListGroup.Item>{props.top3}</ListGroup.Item>
            <ListGroup.Item>{props.top4}</ListGroup.Item>
            <ListGroup.Item>{props.top5}</ListGroup.Item>
        </ListGroup>
    )
}

export default ListHome;
