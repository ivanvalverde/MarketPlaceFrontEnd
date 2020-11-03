import React from "react";
import "../../assets/css/signin.css";
import Form from "react-bootstrap/Form";
import SigninTitle from "./SigninTitle";
import SigninFooter from "./SigninFooter";


const SigninClient = () => {

  return (
    <Form className="formClient">
      <SigninTitle />
      <section className="inputs">
        <Form.Group controlId="formBasicNameClient" className="groupName">
          <Form.Control type="text" placeholder="Nome Completo" required />
        </Form.Group>
        <Form.Group controlId="formBasicEmailClient" className="groupEmail">
          <Form.Control type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Formato: usuario@email.com" required />
        </Form.Group>
        <Form.Group controlId="formBasicAdressClient" className="groupAdress">
          <Form.Control type="text" placeholder="Endereço" required />
        </Form.Group>
        <Form.Group controlId="formBasicCEPClient" className="groupCEP">
          <Form.Control type="text" placeholder="CEP" pattern="[0-9]{5}-[\d]{3}" title="Formato: 99999-999" required />
        </Form.Group>
        <Form.Group controlId="formBasicCPFClient" className="groupCPF">
          <Form.Control type="text" placeholder="CPF" pattern="/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/" title="Formato: 999.999.999-99" required />
        </Form.Group>
        <Form.Group controlId="formBasicCellphoneClient" className="groupCellphone">
          <Form.Control type="text" placeholder="Telefone" pattern="\([0-9]{2}\)[\s][0-9]{5}-[0-9]{4}"
            title="Formato: (99) 99999-9999" required />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordClient" className="groupPassword">
          <Form.Control type="password" placeholder="Senha" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="A senha deve conter pelo menos 1 letra maiúscula, 1 minúscula, 1 número e 8 caracteres." required />
        </Form.Group>
      </section>
      <SigninFooter />
    </Form>
  );
};

export default SigninClient;
