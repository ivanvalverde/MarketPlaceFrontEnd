import React, { useContext } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../assets/imgs/mercadinBlack.png';
import "../../assets/css/header.css";
import Auth from '../auth/index';
import UserContext from '../../userContext';
import getOneProduct from '../../api/getOneProduct';
import { useHistory } from "react-router-dom";


const Header = () => {

  const { user } = useContext(UserContext);
  const [id, setID] = React.useState("");
  const history = useHistory();

  const handleSearch = (event) => {
    setID(event.target.value);
  }

  const handlePress = (event) => {
    event.preventDefault();
    getOneProduct(id).then((prod) => {
      console.log(prod)
      history.push({
        pathname: `/many/produto`,
        state: prod
      })
    })
  }

  return (
    <>
      <Navbar className="headerNavBar" collapseOnSelect expand="md">
        <Navbar.Brand href="#home"><img className="headerLogo" src={Logo} alt="Logo do site contido no header."></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-5 d-flex w-75 justify-content-between">

            <div className="d-flex">

              <Link className="d-flex align-items-center mx-2 headerNavLink" to='/'>Home</Link>

              <Link className="d-flex align-items-center mx-2 headerNavLink" to='/signup'>Cadastro</Link>

              <Link className="d-flex align-items-center mx-2 headerNavLink" to='/signin'>Entre</Link>

              {user.clien==="fornecedor"?<Link className="d-flex align-items-center mx-2 headerNavLink" to='/registrar/produto'>Venda</Link>:
              <></>}

            </div>

            {user.auth ? <Auth className="align-self-end w-50" /> : <></>}


          </Nav>
          <Form inline >
            <InputGroup onChange={handleSearch} className="ml-5 ml-md-0 mr-sm-2 input">
              <FormControl
                placeholder="Buscar"
                aria-label="Buscar"
                aria-describedby="search"
              />
              <InputGroup.Append>
                <Button onClick={handlePress} className="headerSearchButton">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
