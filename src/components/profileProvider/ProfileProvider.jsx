import React from "react";
import "../../assets/css/profileProvider.css";
import img from "../../assets/imgs/user.svg";
import Form from "react-bootstrap/Form";

const ProfileProvider = (props) => {
  return (
    <main className="d-flex justify-content-center align-items-center bg-secondary profileProvider">
      <Form className="formProfile rounded w-100">
      <Form.Group controlId="formProfileProviderTitle" className="groupTitle">
          <h2 className="text-center">Seus dados</h2>
        </Form.Group>

        <Form.Group
          controlId="formProfileProviderLogo"
          className="groupLogo d-flex justify-content-center align-items-center"
        ><img src={props.img?props.img:img} alt="profile" className="w-50 h-50 rounded-circle"/></Form.Group>
      <Form.Group controlId="formProfileNameProvider" className="groupName">
          <Form.Control className="border border-dark"  type="text" placeholder="Nome da Empresa" required />
        </Form.Group>

        <Form.Group controlId="formProfileSocialProvider" className="groupCompanyName">
          <Form.Control className="border border-dark"  type="text" placeholder="Razão Social" required />
        </Form.Group>

        <Form.Group controlId="formProfileAdressProvider" className="groupAdress">
          <Form.Control className="border border-dark"  type="text" placeholder="Endereço" required />
        </Form.Group>

        <Form.Group controlId="formProfileCEPProvider" className="groupCEP">
          <Form.Control className="border border-dark" type="text" placeholder="CEP" pattern="[0-9]{5}-[\d]{3}" title="Formato: 99999-999" required />
        </Form.Group>

        <Form.Group controlId="formProfileCNPJProvider" className="groupCNPJ">
          <Form.Control className="border border-dark"  type="text" placeholder="CNPJ"
            pattern="/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/" title="Formato: 99.999.999/9999-99" required />
        </Form.Group>

        <Form.Group controlId="formProfileEmailProvider" className="groupEmail">
          <Form.Control className="border border-dark"  type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Formato: usuario@email.com" required />
        </Form.Group>

        <Form.Group controlId="formProfileCellphoneProvider" className="groupCellphone">
          <Form.Control className="border border-dark"  type="text" placeholder="Telefone" pattern="\([0-9]{2}\)[\s][0-9]{5}-[0-9]{4}"
            title="Formato: (99) 99999-9999" required />
        </Form.Group>

        <Form.Group controlId="formProfilePasswordProvider" className="groupPassword">
          <Form.Control className="border border-dark"  type="password" placeholder="Senha" required />
        </Form.Group>
        <Form.Group controlId="formProfilePhotoProvider" className="groupPhoto w-100">
          <Form.Control className="border border-dark" type="text" placeholder="Link da foto de perfil" />
        </Form.Group>
      </Form>
    </main>
  );
};

export default ProfileProvider;
