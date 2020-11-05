import React from "react";
import "../../assets/css/signin.css";
import Form from "react-bootstrap/Form";
import SigninTitle from "./SigninTitle";
import SigninFooter from "./SigninFooter";

const SigninProvider = (props) => {

  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const [razao, setRazao] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [cnpj, setCnpj] = React.useState("");

  const handleFormNome = (event) => {
    setNome(event.target.value);
  }

  const handleFormEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleFormCep = (event) => {
    setCep(event.target.value);
  }

  const handleFormEndereco = (event) => {
    setEndereco(event.target.value);
  }

  const handleFormRazao = (event) => {
    setRazao(event.target.value);
  }

  const handleFormTelefone = (event) => {
    setTelefone(event.target.value);
  }

  const handleFormSenha = (event) => {
    setSenha(event.target.value);
  }

  const handleFormCnpj = (event) => {
    setCnpj(event.target.value);
  }


  return (
    <Form className="formProvider rounded">
      <SigninTitle />
      <section className="inputs">
        <Form.Group controlId="formBasicNameProvider" className="groupName">
          <Form.Control className="border border-dark" onChange={handleFormNome} type="text" placeholder="Nome da Empresa" required />
        </Form.Group>

        <Form.Group controlId="formBasicSocialProvider" className="groupCompanyName">
          <Form.Control className="border border-dark" onChange={handleFormRazao} type="text" placeholder="Razão Social" required />
        </Form.Group>

        <Form.Group controlId="formBasicAdressProvider" className="groupAdress">
          <Form.Control className="border border-dark" onChange={handleFormEndereco} type="text" placeholder="Endereço" required />
        </Form.Group>

        <Form.Group controlId="formBasicCEPProvider" className="groupCEP">
          <Form.Control className="border border-dark" onChange={handleFormCep} type="text" placeholder="CEP" pattern="[0-9]{5}-[\d]{3}" title="Formato: 99999-999" required />
        </Form.Group>

        <Form.Group controlId="formBasicCNPJProvider" className="groupCNPJ">
          <Form.Control className="border border-dark" onChange={handleFormCnpj} type="text" placeholder="CNPJ"
            pattern="/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/" title="Formato: 99.999.999/9999-99" required />
        </Form.Group>

        <Form.Group controlId="formBasicEmailProvider" className="groupEmail">
          <Form.Control className="border border-dark" onChange={handleFormEmail} type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Formato: usuario@email.com" required />
        </Form.Group>

        <Form.Group controlId="formBasicCellphoneProvider" className="groupCellphone">
          <Form.Control className="border border-dark" onChange={handleFormTelefone} type="text" placeholder="Telefone" pattern="\([0-9]{2}\)[\s][0-9]{5}-[0-9]{4}"
            title="Formato: (99) 99999-9999" required />
        </Form.Group>

        <Form.Group controlId="formBasicPasswordProvider" className="groupPassword">
          <Form.Control className="border border-dark" onChange={handleFormSenha} type="password" placeholder="Senha" required />
        </Form.Group>
        <Form.Group controlId="formBasicPhotoProvider" className="groupPhoto w-100">
          <Form.Control className="border border-dark" type="text" placeholder="Link da foto de perfil" />
        </Form.Group>
      </section>
      <SigninFooter nome={nome} senha={senha} email={email} cep={cep} cnpj={cnpj} endereco={endereco} telefone={telefone} razao={razao}
        modelo={props.modelo} />
    </Form>
  );
};

export default SigninProvider;
