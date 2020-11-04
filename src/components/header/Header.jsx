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
import Logo from '../../assets/imgs/Logo.png';
import "../../assets/css/header.css";
import Auth from '../auth/index';
import UserContext from '../../userContext';


const Header = () => {


  const { user } = useContext(UserContext);
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
          <Nav className="mr-auto ml-5 d-flex w-75 justify-content-between">

            <div className="d-flex">

              <Link className="d-flex align-items-center mx-2 headerNavLink" to='/'>Home</Link>

              <Link className="d-flex align-items-center mx-2 headerNavLink" to='/signup'>Cadastro</Link>

              <Link className="d-flex align-items-center mx-2 headerNavLink" to='/signin'>Entre</Link>

            </div>

            {user.auth ? <Auth className="align-self-end w-50"/> : <></>}


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
