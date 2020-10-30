import React from 'react';
import Card from '../cardHome/index';
import '../../assets/css/home.css';

const Home = () => {

    const oferta = [["Teste", "Teste"], ["Teste", "Teste"], ["Teste", "Teste"], ["Teste", "Teste"]];

    return (

        <main className="home">

            <section className="homeSectionOne">

            </section>

            <section className="homeSectionTwo">

            </section>

            <section className="homeSectionsMargin">

                <h2 className="homeSectionsH2">Recomendados</h2>

                <div className="d-flex justify-content-between homeSectionsDiv">

                    {oferta.map((elem, index) => {
                        return (
                            <Card title={elem[0]} text={elem[1]} key={index} />
                        )
                    })}

                </div>

            </section>

            <section className="homeSectionsMargin">

                <h2 className="homeSectionsH2">Fornecedores Populares</h2>

                <div className="d-flex justify-content-between homeSectionsDiv">

                    {oferta.map((elem, index) => {
                        return (
                            <Card title={elem[0]} text={elem[1]} key={index} />
                        )
                    })}

                </div>

            </section>

            <section className="homeSectionsMargin">

                <h2 className="homeSectionsH2">Clientes Populares</h2>

                <div className="d-flex justify-content-between homeSectionsDiv">

                    {oferta.map((elem, index) => {
                        return (
                            <Card title={elem[0]} text={elem[1]} key={index} />
                        )
                    })}

                </div>

            </section>


        </main>
    )
}

export default Home
