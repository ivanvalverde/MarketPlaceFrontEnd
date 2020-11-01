import React from 'react';
import Card from '../cardHome/index';
import getProduto from '../../api/produto';
import '../../assets/css/home.css';

const Home = () => {

    const oferta = [1,2,3,4]

    const [dados, setDados] = React.useState([]);

    React.useEffect(()=>{
        getProduto().then((data)=>{

            setDados(data.results);
        })

        
    },[]);

       
        
    return (

        <main className="home">

            <section className="homeSectionOne">

            </section>

            <section className="homeSectionTwo">

            </section>

            <section className="homeSectionsMargin">

                <h2 className="homeSectionsH2">Recomendados</h2>

                <div className="d-flex justify-content-between homeSectionsDiv">

                    {dados.map((elem, index) => {
                        return (
                            <Card title={elem.nome} text={elem.descricao} img={elem.foto}  key={index} />
                        )
                    })}

                </div>

            </section>

            <section className="homeSectionsMargin">

                <h2 className="homeSectionsH2">Fornecedores Populares</h2>

                <div className="d-flex justify-content-between homeSectionsDiv">

                    {oferta.map((elem, index) => {
                        return (
                            <Card title={elem} text={elem} key={index} />
                        )
                    })}

                </div>

            </section>

            <section className="homeSectionsMargin">

                <h2 className="homeSectionsH2">Clientes Populares</h2>

                <div className="d-flex justify-content-between homeSectionsDiv">

                    {oferta.map((elem, index) => {
                        return (
                            <Card title={elem} text={elem} key={index} />
                        )
                    })}

                </div>

            </section>


        </main>
    )
}

export default Home
