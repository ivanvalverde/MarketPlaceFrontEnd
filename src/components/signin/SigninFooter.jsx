import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SigninFooter = () => {
  return (
    <>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Aceito os Termos e condições e autorizo o uso de meus dados de acordo com a Declaração de privacidade."
        />
      </Form.Group>
      <Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
        <Form.Text muted>Já possui conta?</Form.Text>
        <Form.Text muted>
          <a href="#Login">Faça Login</a>
        </Form.Text>
      </Form.Group>
    </>
  );
};

export default SigninFooter;
