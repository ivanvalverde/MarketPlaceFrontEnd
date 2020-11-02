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

                <p>O Mercadin é um e-commerce, mediado por uma empresa, em que vários lojistas se inscrevem e vendem seus produtos. Essa loja virtual funciona de forma que o cliente pode acessar um site e comprar itens de diferentes varejistas.</p>

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
