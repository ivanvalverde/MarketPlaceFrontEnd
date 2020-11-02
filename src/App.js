import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Home from "./components/home/index";
import Signup from "./components/signin/index";
import Signin from "./components/signup";
import React from 'react';
import getProduto from './api/produto';
import getCliente from './api/cliente';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Product from "./components/product/index";

function App() {

  const [data, setData] = React.useState([]);
  const [cliente, setCliente] = React.useState([]);

  React.useEffect(() => {

    getProduto().then((data) => {
      setData(data.results);
    })

    getCliente().then((user) => {
      setCliente(user);
    })

  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>

          <Route exact path="/">

            <Home apiData={data} />

          </Route>

          <Route path="/signup">

            <Signup />

          </Route>

          <Route path="/signin">

            <Signin  apiUser={cliente} />

          </Route>

          <Route path="/product/:id">

            <Product apiData={data}/>

          </Route>

        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
