import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/header.css";


const Header = () => {
  return (
    <>
      <Navbar className="headerNavBar" collapseOnSelect expand="md">
        <Navbar.Brand href="#home">MarketPlace</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-5">
            <Nav.Link href="#home" className="mx-2 headerNavLink">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="mx-2 headerNavLink">
              Clientes
            </Nav.Link>
            <Nav.Link href="#pricing" className="mx-2 headerNavLink">
              Fornecedores
            </Nav.Link>
            <Nav.Link href="#pricing" className="mx-2 headerNavLink">
              Cadastro
            </Nav.Link>
          </Nav>
          <Form inline >
            <InputGroup className="ml-5 ml-md-0 mr-sm-2 input">
              <FormControl
                placeholder="Buscar"
                aria-label="Buscar"
                aria-describedby="search"
              />
              <InputGroup.Append>
                <Button className="headerSearchButton">
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
