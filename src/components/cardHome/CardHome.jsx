import React from 'react';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import '../../assets/css/cardHome.css';

const CardHome = (props) => {

    return (
        <Card className="mx-4 my-4 cardHome">
            <Link to={`/product/${props.fetchId}`}><Card.Img variant="top" className="cardHomeImg" src={props.img} /></Link>
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
