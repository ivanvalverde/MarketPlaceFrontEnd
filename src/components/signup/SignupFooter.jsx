import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import getOneUser from '../../api/getOne';
import bcrypt from "bcryptjs";

const SigninFooter = (props) => {

  const [cliente, setCliente] = React.useState([]);

  const userWritten = props.inputUser;
  const passWritten = props.inputPass;

  const handlePress = (event) => {
    event.preventDefault();

    getOneUser(props.modelo, userWritten).then((user) => {
      console.log(user.results)
      setCliente(user.results);
      console.log(user.results)
      if ((cliente !== [])&&(cliente !== null)) {
        if((cliente.senha === bcrypt.hashSync(passWritten, cliente.salto))){
        console.log("acertou ")
        }
      }
    });
  }

  return (
    <Form.Group>
      <Button onClick={handlePress} variant="primary" type="submit">
        Login
        </Button>
      <Form.Text muted><p className="mb-0 text-dark">Não possui uma conta?</p></Form.Text>
      <Form.Text muted>
        <a href="#Signin">Cadastre-se</a>
      </Form.Text>
    </Form.Group>
  );
};

export default SigninFooter;
