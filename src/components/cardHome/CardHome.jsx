import React from 'react'
import Card from 'react-bootstrap/Card';
import '../../assets/css/cardHome.css';

const CardHome = (props) => {

    return (
        <Card className="cardHome">
            <Card.Img variant="top" className="cardHomeImg"/>
            <Card.Body className="cardHomeBody">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardHome;
