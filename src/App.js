import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Home from "./components/home/index";
import Signin from "./components/signin/index";
import Signup from "./components/signup";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/cadastro">

          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
