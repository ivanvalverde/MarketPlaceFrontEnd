import React from 'react'
import Card from 'react-bootstrap/Card';
import '../../assets/css/cardHome.css';

const CardHome = (props) => {

    return (
        <Card className="mx-4 cardHome" key={props.key}>
            <a href={props._id}><Card.Img variant="top" className="cardHomeImg" src={props.img} /></a>
            <Card.Body className="cardHomeBody">

                <div className="d-flex justify-content-between">
                    <Card.Title className="cardName">{props.title}</Card.Title>
                    <Card.Text className="cardPrice">R${props.preco}</Card.Text>
                </div>

                <Card.Text>
                    {props.text}
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default CardHome;
