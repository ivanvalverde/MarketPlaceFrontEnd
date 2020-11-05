import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Home from "./components/home/index";
import Signup from "./components/signin/index";
import Signin from "./components/signup/index";
import React, { useContext } from 'react';
import getAll from './api/getAll';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Product from "./components/product/index";
import ProductRegistration from "./components/productRegistration";
import Confirm from "./components/confirm";
import UserContext from "./userContext";
import CardProd from "./components/cardsProd/index";
import Vendas from "./components/productRegistration/index";
import Denied from "./components/denied";
import img from "./assets/imgs/denied.svg";
import logo from "./assets/imgs/check-mark.svg";
import OkProd from "./components/confirmProd/index";
import UpdProfileSucces from './components/confirmUpdate/index';
import Profile from "./components/profile/index";
import CompraFeita from "./components/confirmPurchase/index";


function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getAll("produto").then((data) => {
      setData(data.results);
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>


        <Header />

        <Switch>
          <Route exact path="/">
            <Home apiData={data} />
          </Route>

          <Route path="/produto">

            <ProductRegistration />

          </Route>

          <Route path="/loggedin">

            <Confirm img={logo} />

          </Route>

          <Route path="/comprado">

          <CompraFeita />

          </Route>

          <Route path="/registrar/produto">

            <Vendas />

          </Route>

          <Route path="/profile">

            <Profile />

          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/signin">
            <Signin />
          </Route>

          <Route path="/many/produto">

            <CardProd />

          </Route>

          <Route path="/sucesso">

            <UpdProfileSucces />

          </Route>

          <Route path="/product/:id">

            <Product apiData={data} />

          </Route>

          <Route path="/vender/sucesso">

            <OkProd />

          </Route>

          <Route path="/denied">

            <Denied img={img} />

          </Route>

        </Switch>

        <Footer />


      </BrowserRouter>

    </div>
  );
}

export default App;
