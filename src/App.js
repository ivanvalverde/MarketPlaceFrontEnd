import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Home from "./components/home/index";
import Signin from "./components/signin/index";
import Signup from "./components/signup";
import React from 'react';
import getProduto from './api/produto';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Product from "./components/product/index";

function App() {

  const [data, setData] = React.useState([]);

  React.useEffect(() => {

    getProduto().then((data) => {
      setData(data.results);
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

          <Route path="/signin">

            <Signin />

          </Route>

          <Route path="/signup">

            <Signup />

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
