import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import bcrypt from "bcryptjs";

const SigninFooter = (props) => {

  const usuarios = props.cliente;
  console.log(usuarios)
  
  console.log(usuarios);
  const userWritten = props.inputUser;
  const passWritten = props.inputPass;

  const handlePress = (event)=>{
    event.preventDefault();

    const cadastro = usuarios.filter(elem => { return elem.senha === bcrypt.hashSync(passWritten, elem.salto)});
    console.log(cadastro)
  }

  return (
      <Form.Group>
        <Button onClick={handlePress} variant="primary" type="submit">
          Login
        </Button>
        <Form.Text muted>Não possui uma conta?</Form.Text>
        <Form.Text muted>
          <a href="#Signin">Cadastre-se</a>
        </Form.Text>
      </Form.Group>
  );
};

export default SigninFooter;
