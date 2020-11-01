import React from 'react'
import Card from 'react-bootstrap/Card';
import '../../assets/css/cardHome.css';

const CardHome = (props) => {

    return (
        <Card className="cardHome" key={props.key}>
            <Card.Img variant="top" className="cardHomeImg" src={props.img}/>
            <Card.Body className="cardHomeBody">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                    {props.preco}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardHome;
