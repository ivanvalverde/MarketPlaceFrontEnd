import React from 'react';
import Card from '../cardHome/index';
import getProduto from '../../api/produto';
import '../../assets/css/home.css';

const Home = () => {

    const oferta = [1, 2, 3, 4]

    const [dados, setDados] = React.useState([]);

    React.useEffect(() => {
        getProduto().then((data) => {

            /*let costArr = data.results.map((elem, index) => {
                return {
                    preco: elem.preco,
                    index: index
                }
            });

            let minCostArr = [];

            for (let i = 0; i < 4; i++) {

                let min = Math.min.apply(Math, costArr.map(function (elem) { return elem.preco; }))
                
                let prod = data.results.filter(obj => {
                    return obj.preco === min
                  })

                costArr.splice(costArr.findIndex(x => x.preco === min), 1);
                minCostArr.push(...prod);
            }*/

            setDados(data.results);
        })


    }, []);



    return (

        <main className="home">

            <section className="homeSectionOne">

            </section>

            <section className="homeSectionTwo">

            </section>

            <section className="py-5 homeCommended">

                <div>

                    <h2 className="homeSectionsH2">Vitrine</h2>

                    <div className="d-flex justify-content-between homeSectionsDiv">

                        {dados.map((elem, index) => {
                            return (
                                <Card title={elem.nome} text={elem.descricao} img={elem.foto} preco={elem.preco} key={index} fetchId={elem._id}/>
                            )
                        })}

                    </div>

                </div>

            </section>

            <section className="homeSectionsMargin">

                <h2 className="homeSectionsH2">Fornecedores</h2>

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
