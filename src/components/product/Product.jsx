import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/css/products.css';
import UserContext from '../../userContext';
import getProvider from '../../api/getProviderViaId';
import PostCompra from '../../api/post';

const Product = (props) => {

    const { id } = useParams();
    const data = props.apiData;
    const { user } = useContext(UserContext);
    const [forn, setForn] = React.useState("");

    React.useEffect(() => {

        getProvider(data.filter(elem => elem._id === id).map((dados) =>  dados.fornecedor)[0]).then((data) => {
            setForn(data.results.nome);
        });
    }, [data]);

    const handlePress = (event) =>{
        event.preventDefault();

        const body={
            idProduto: data.filter(elem => elem._id === id).map((dados) =>  dados._id)[0],
            idCliente: user.id
        }

        PostCompra(body, "compra").then((res)=>{
            console.log(res);
        })
        
    }

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
                            <p>{forn}</p>
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

                        <div className="d-flex justify-content-between">

                            <div className="d-flex flex-column">
                                <p className="mb-0 productInfo">Estoque:</p>
                                <p>{dados.estoque}</p>
                            </div>

                            {user.auth ? <button onClick={handlePress}>Comprar!</button> : <></>}

                        </div>

                    </div>
                </div>
            ))}

        </div>
    )
}

export default Product;
