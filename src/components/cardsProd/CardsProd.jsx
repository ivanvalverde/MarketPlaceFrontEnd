import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Card from '../cardHome/index';

const CardsProd = () => {
    
    const location = useLocation();

    useEffect(() => {
       console.log(location.state);
    }, [location]);

    return (

        <div className="m-5 d-flex flex-wrap justify-content-center">
           
           {location.state.map((elem, index)=>{return (<Card title={elem.nome} text={elem.descricao} img={elem.foto} preco={elem.preco} key={index} fetchId={elem._id}/>)
           })}
            
        </div>
    )
}

export default CardsProd
