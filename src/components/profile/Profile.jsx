import React from "react";
import Form from "react-bootstrap/Form";

const Profile = () => {
  return (
    <main className="profile bg-secondary d-flex justify-content-center align-items-center">
      <Form className="formProfile rounded">
        <Form.Group controlId="formProfileNameClient" className="groupName">
          <Form.Control
            className="border border-dark"
            type="text"
            placeholder="Nome Completo"
            required
          />
        </Form.Group>
        <Form.Group controlId="formProfileEmailClient" className="groupEmail">
          <Form.Control
            className="border border-dark"
            type="email"
            placeholder="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Formato: usuario@email.com"
            required
          />
        </Form.Group>
        <Form.Group controlId="formProfileAdressClient" className="groupAdress">
          <Form.Control
            className="border border-dark"
            type="text"
            placeholder="Endereço"
            required
          />
        </Form.Group>
        <Form.Group controlId="formProfileCEPClient" className="groupCEP">
          <Form.Control
            className="border border-dark"
            type="text"
            placeholder="CEP"
            pattern="[0-9]{5}-[\d]{3}"
            title="Formato: 99999-999"
            required
          />
        </Form.Group>
        <Form.Group controlId="formProfileCPFClient" className="groupCPF">
          <Form.Control
            className="border border-dark"
            type="text"
            placeholder="CPF"
            pattern="/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"
            title="Formato: 999.999.999-99"
            required
          />
        </Form.Group>
        <Form.Group
          controlId="formProfileCellphoneClient"
          className="groupCellphone"
        >
          <Form.Control
            className="border border-dark"
            type="text"
            placeholder="Telefone"
            pattern="\([0-9]{2}\)[\s][0-9]{5}-[0-9]{4}"
            title="Formato: (99) 99999-9999"
            required
          />
        </Form.Group>
        <Form.Group
          controlId="formProfilePasswordClient"
          className="groupPassword"
        >
          <Form.Control
            className="border border-dark"
            type="password"
            placeholder="Senha"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="A senha deve conter pelo menos 1 letra maiúscula, 1 minúscula, 1 número e 8 caracteres."
            required
          />
        </Form.Group>
        <Form.Group controlId="formProfileClient" className="groupPhoto w-100">
          <Form.Control
            className="border border-dark"
            type="text"
            placeholder="Link da foto de perfil"
          />
        </Form.Group>
      </Form>
    </main>
  );
};

export default Profile;
