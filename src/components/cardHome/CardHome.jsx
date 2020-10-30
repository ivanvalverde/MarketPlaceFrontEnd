import React from 'react'
import Card from 'react-bootstrap/Card';
import FooterImg from '../../assets/imgs/RPA.jpg';
import '../../assets/css/cardHome.css';

const CardHome = (props) => {
    return (
        <Card className="cardHome">
            <Card.Img variant="top" src={FooterImg} className="cardHomeImg"/>
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
