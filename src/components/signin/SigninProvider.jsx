import React from "react";
import "../../assets/css/signin.css";
import Form from "react-bootstrap/Form";
import SigninTitle from "./SigninTitle";
import SigninFooter from "./SigninFooter";

const SigninProvider = () => {
  return (
    <Form className="formProvider">
      <SigninTitle />
      <section className="inputs">
        <Form.Group controlId="formBasicName" className="groupName">
          <Form.Control type="text" placeholder="Nome da Empresa" required />
        </Form.Group>

        <Form.Group controlId="formBasicName" className="groupCompanyName">
          <Form.Control type="text" placeholder="Razão Social" required />
        </Form.Group>

        <Form.Group controlId="formBasicAdress" className="groupAdress">
          <Form.Control type="text" placeholder="Endereço" required />
        </Form.Group>

        <Form.Group controlId="formBasicCEP" className="groupCEP">
          <Form.Control type="text" placeholder="CEP" pattern="[0-9]{5}-[\d]{3}" title="Formato: 99999-999" required />
        </Form.Group>

        <Form.Group controlId="formBasicCNPJ" className="groupCNPJ">
          <Form.Control type="text" placeholder="CNPJ"
            pattern="/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/" title="Formato: 99.999.999/9999-99" required />
        </Form.Group>

        <Form.Group controlId="formBasicEmail" className="groupEmail">
          <Form.Control type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Formato: usuario@email.com" required />
        </Form.Group>

        <Form.Group controlId="formBasicCellphone" className="groupCellphone">
          <Form.Control type="text" placeholder="Telefone" pattern="\([0-9]{2}\)[\s][0-9]{5}-[0-9]{4}"
            title="Formato: (99) 99999-9999" required />
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
