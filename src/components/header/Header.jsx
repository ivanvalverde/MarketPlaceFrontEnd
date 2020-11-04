import React from "react";
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


const Header = () => {

  const [id, setID] = React.useState("");

  const handleSearch = (event) => {
    setID(event.target.value);
  }

  const handlePress = (event) => {
    console.log(id);
  }

  return (
    <>
      <Navbar className="headerNavBar" collapseOnSelect expand="md">
        <Navbar.Brand href="#home"><img className="headerLogo" src={Logo} alt="Logo do site contido no header."></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-5">

            <Link className="d-flex align-items-center mx-2 headerNavLink" to='/'>Home</Link>

            <Nav.Link className="mx-2 headerNavLink">
              Clientes
            </Nav.Link>

            <Nav.Link className="mx-2 headerNavLink">
              Fornecedores
            </Nav.Link>

            <Link className="d-flex align-items-center mx-2 headerNavLink" to='/signup'>Cadastro</Link>


            <Link className="d-flex align-items-center mx-2 headerNavLink" to='/signin'>Entre</Link>

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
