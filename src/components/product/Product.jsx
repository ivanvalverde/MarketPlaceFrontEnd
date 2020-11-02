import React from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/css/products.css';

const Product = (props) => {

    const { id } = useParams();
    const data = props.apiData;

    return (
        <div className="py-5 productsDiv">

            {data.filter(elem => elem._id === id).map((dados, index) => (

                <div className="d-flex mx-auto w-50 border border-secondary productsDisplay" key={index}>

                    <img className="productPic" src={dados.foto}></img>

                    <div className="border-left border-secondary px-3">

                        <h1 className="mb-0">{dados.nome}</h1>
                        <h2 className="mb-3 productPrice">R${dados.preco}</h2>

                        <div className="d-flex flex-column">
                            <p className="mb-0 productInfo">Fornecedor:</p>
                            <p>{dados.fornecedor}</p>
                        </div>

                        <div className="d-flex flex-column">
                            <p className="mb-0 productInfo">Descrição:</p>
                            <p>{dados.descricao}</p>
                        </div>

                        <div className="d-flex flex-column">
                            <p className="mb-0 productInfo">Avaliação:</p>
                            <p>{dados.avaliacao}</p>
                        </div>

                        <div className="d-flex flex-column">
                            <p className="mb-0 productInfo">Categoria:</p>
                            <p>{dados.categoria}</p>
                        </div>

                        <div className="d-flex flex-column">
                            <p className="mb-0 productInfo">Estoque:</p>
                            <p>{dados.estoque}</p>
                        </div>

                    </div>
                </div>
            ))}

        </div>
    )
}

export default Product;
