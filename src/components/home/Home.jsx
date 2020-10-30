import React from 'react';
import Card from '../cardHome/index';
import '../../assets/css/home.css';

const Home = () => {

    const oferta = [["Teste", "Teste"], ["Teste", "Teste"], ["Teste", "Teste"], ["Teste", "Teste"]];

    return (

        <main className="home">

            <section style={{height:"400px", backgroundColor: "#C4C4C4"}}>

            </section>

            <section style={{height:"150px", backgroundColor: "#C4C4C4", margin:"5vw"}}>

            </section>

            <section style={{ margin: "12vh 0" }}>

                <h2 style={{ margin: "6vh 5vw", color: "#454545", fontSize: "30px" }}>Recomendados</h2>

                <div className="d-flex justify-content-between" style={{ margin: "3vh 5vw" }}>

                    {oferta.map((elem, index) => {
                        return (
                            <Card title={elem[0]} text={elem[1]} key={index} />
                        )
                    })}

                </div>

            </section>

            <section style={{ margin: "12vh 0" }}>

                <h2 style={{ margin: "6vh 5vw", color: "#454545", fontSize: "30px" }}>Fornecedores Populares</h2>

                <div className="d-flex justify-content-between" style={{ margin: "3vh 5vw" }}>

                    {oferta.map((elem, index) => {
                        return (
                            <Card title={elem[0]} text={elem[1]} key={index} />
                        )
                    })}

                </div>

            </section>

            <section style={{ margin: "12vh 0" }}>

                <h2 style={{ margin: "6vh 5vw", color: "#454545", fontSize: "30px" }}>Clientes Populares</h2>

                <div className="d-flex justify-content-between" style={{ margin: "3vh 5vw" }}>

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
