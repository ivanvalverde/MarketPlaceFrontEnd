import React from 'react';
import Card from '../cardHome/index';
import '../../assets/css/home.css';

const Home = (props) => {
    
    const dados = props.apiData;

    return (

        <main className="home">

            <section className="homeSectionOne">

            </section>

            <section className="homeSectionTwo">

                <p>O Mercadin é um shopping virtual que reúne vários compradores e vendedores em um só lugar.<br />
                Aqui você vai encontrar tudo que procura para comprar ou se quiser vender, é só cadatrar seus produtos e anunciar!<br />
                Vamos às compras? Aqui no Mercadin seu carrinho nunca fica vazio!</p>

            </section>

            <section className="py-5 homeCommended">

                <div>

                    <h2 className="homeSectionsH2">Vitrine</h2>

                    <div className="d-flex justify-content-between homeSectionsDiv">

                        {dados.map((elem, index) => {
                            return (
                                <Card title={elem.nome} text={elem.descricao} img={elem.foto} preco={elem.preco} key={index} fetchId={elem._id} />
                            )
                        })}

                    </div>

                </div>

            </section>

        </main>
    )
}

export default Home
