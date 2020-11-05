import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import getOneUser from '../../api/getOne';
import bcrypt from "bcryptjs";
import { useHistory } from "react-router-dom";
import UserContext from '../../userContext';

const SigninFooter = (props) => {

  const userWritten = props.inputUser;
  const passWritten = props.inputPass;
  const history = useHistory();
  const { login } = useContext(UserContext);


  const handlePress = (event) => {
    event.preventDefault();

    getOneUser(props.modelo, userWritten).then((users) => {

      if ((users.results !== []) && (users.results !== null)) {
        if ((users.results.senha === bcrypt.hashSync(passWritten, users.results.salto))) {

          if (props.modelo === "cliente") {
            login(users.results.nome, users.results._id, props.modelo, users.results.email, users.results.telefone,
              users.results.endereco, users.results.cpf, users.results.foto)
          } else{
            login(users.results.nome, users.results._id, props.modelo, users.results.email, users.results.telefone,
              users.results.endereco, '', users.results.foto, users.results.razaoSocial, users.results.cnpj)
          }
          history.push("/loggedin");
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
