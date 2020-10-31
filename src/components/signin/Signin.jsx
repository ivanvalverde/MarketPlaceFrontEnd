import React from "react";
import "../../assets/css/signin.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Signin = () => {
  return (
    <main className="signin">
      <Form className="formClient">
        <Form.Group className="groupTitle">
          <h2 className="formTitle">Insira seus dados</h2>
        </Form.Group>
        <section className="inputs">
          <Form.Group controlId="formBasicName" className="groupName">
            <Form.Control type="text" placeholder="Nome Completo" required />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="groupEmail">
            <Form.Control type="email" placeholder="Email" required />
          </Form.Group>
          <Form.Group controlId="formBasicAdress" className="groupAdress">
            <Form.Control type="text" placeholder="Endereço" required />
          </Form.Group>
          <Form.Group controlId="formBasicCEP" className="groupCEP">
            <Form.Control type="number" placeholder="CEP" required />
          </Form.Group>
          <Form.Group controlId="formBasicCPF" className="groupCPF">
            <Form.Control type="number" placeholder="CPF" required />
          </Form.Group>
          <Form.Group controlId="formBasicCellphone" className="groupCellphone">
            <Form.Control type="number" placeholder="Telefone" required />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="groupPassword">
            <Form.Control type="password" placeholder="Senha" required />
          </Form.Group>
        </section>
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
      </Form>
    </main>
  );
};

export default Signin;
