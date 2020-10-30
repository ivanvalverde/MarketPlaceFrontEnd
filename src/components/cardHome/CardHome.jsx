import React from 'react'
import Card from 'react-bootstrap/Card';
import FooterImg from '../../assets/imgs/RPA.jpg';

const CardHome = (props) => {
    return (
        <Card style={{ width: '16rem', background:"linear-gradient(180deg, #B33ADD 0%, #D17894 100%)"}} className="cardHome">
            <Card.Img variant="top" src={FooterImg} style={{width: "90%", height:"auto", maxWidth: "14rem", maxHeight:"180px",margin: "0 auto", borderRadius: "3px", marginTop: "15px", paddingBottom: "15px"}} />
            <Card.Body style={{background: "#FFFFFF", width: "90%", height:"auto", margin: "0 auto", borderRadius: "3px", marginBottom: "15px"}}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardHome;
