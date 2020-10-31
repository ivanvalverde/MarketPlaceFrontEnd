import React from "react";
import "../../assets/css/signin.css";
import Form from "react-bootstrap/Form";
import SigninTitle from "./SigninTitle";
import SigninFooter from "./SigninFooter";

const SigninProvider = () => {
  return (
    <Form className="formClient">
      <SigninTitle />
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
      <SigninFooter />      
    </Form>
  );
};

export default SigninProvider;
