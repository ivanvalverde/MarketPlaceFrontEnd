import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SigninFooter = () => {
  return (
      <Form.Group>
        <Button variant="primary" type="submit">
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
