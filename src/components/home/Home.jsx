import React from 'react';
import Card from '../card-home/index';
import List from '../list-home/index';
import '../../assets/css/home.css';

const Home = () => {

    const oferta = [["Teste", "Teste"], ["Teste", "Teste"], ["Teste", "Teste"], ["Teste", "Teste"]];

    return (
        <main className="home">

            <h2 className="m-5">Ofertas do dia</h2>

            <section className="d-flex justify-content-between m-5">

                {oferta.map((elem, index) => {
                    return (
                        <Card title={elem[0]} text={elem[1]} />
                    )
                })}

            </section>

            <section className="d-flex justify-content-around m-5">

                <div className="w-25">
                    <h4 className="my-4">Fornecedores populares</h4>
                    <List top="Rafael" top2="Laura" top3="Menezes" top4="Bernardo" top5="Shura" />
                </div>

                <div className="w-25">
                    <h4 className="my-4">Clientes populares</h4>
                    <List top="Zidane" top2="Pernil" top3="Adriano" top4="He-man" top5="Toguro" />
                </div>

                <div className="w-25">
                    <h4 className="my-4">Produtos em alta</h4>
                    <List top="Caramelo" top2="Pernil" top3="FIFA 2008" top4="Mercedez" top5="Bola de Basquete" />
                </div>

            </section>


        </main>
    )
}

export default Home
