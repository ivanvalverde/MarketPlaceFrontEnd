import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/index';
import Footer from './components/footer/index';
import Home from './components/home/index';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header />

        <Switch>

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
