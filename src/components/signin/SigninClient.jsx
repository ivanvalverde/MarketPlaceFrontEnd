import React from "react";
import "../../assets/css/signin.css";
import Form from "react-bootstrap/Form";
import SigninTitle from "./SigninTitle";
import SigninFooter from "./SigninFooter";


const SigninClient = (props) => {

  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const handleFormNome = (event)=>{
    setNome(event.target.value);
  }

  const handleFormEmail = (event)=>{
    setEmail(event.target.value);
  }
  
  const handleFormCep = (event)=>{
    setCep(event.target.value);
  }

  const handleFormEndereco = (event)=>{
    setEndereco(event.target.value);
  }

  const handleFormCpf = (event)=>{
    setCpf(event.target.value);
  }

  const handleFormTelefone = (event)=>{
    setTelefone(event.target.value);
  }

  const handleFormSenha = (event)=>{
    setSenha(event.target.value);
  }


  return (
    <Form className="formClient rounded">
      <SigninTitle />
      <section className="inputs">
        <Form.Group controlId="formBasicNameClient" className="groupName">
          <Form.Control className="border border-dark" onChange={handleFormNome} type="text" placeholder="Nome Completo" required />
        </Form.Group>
        <Form.Group controlId="formBasicEmailClient" className="groupEmail">
          <Form.Control className="border border-dark" onChange={handleFormEmail} type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Formato: usuario@email.com" required />
        </Form.Group>
        <Form.Group controlId="formBasicAdressClient" className="groupAdress">
          <Form.Control className="border border-dark" onChange={handleFormEndereco} type="text" placeholder="Endereço" required />
        </Form.Group>
        <Form.Group controlId="formBasicCEPClient" className="groupCEP">
          <Form.Control className="border border-dark" onChange={handleFormCep} type="text" placeholder="CEP" pattern="[0-9]{5}-[\d]{3}" title="Formato: 99999-999" required />
        </Form.Group>
        <Form.Group controlId="formBasicCPFClient" className="groupCPF">
          <Form.Control className="border border-dark" onChange={handleFormCpf} type="text" placeholder="CPF" pattern="/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/" title="Formato: 999.999.999-99" required />
        </Form.Group>
        <Form.Group controlId="formBasicCellphoneClient" className="groupCellphone">
          <Form.Control className="border border-dark" onChange={handleFormTelefone} type="text" placeholder="Telefone" pattern="\([0-9]{2}\)[\s][0-9]{5}-[0-9]{4}"
            title="Formato: (99) 99999-9999" required />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordClient" className="groupPassword">
          <Form.Control className="border border-dark" onChange={handleFormSenha} type="password" placeholder="Senha" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="A senha deve conter pelo menos 1 letra maiúscula, 1 minúscula, 1 número e 8 caracteres." required />
        </Form.Group>
        <Form.Group controlId="formBasicClient" className="groupPhoto w-100">
          <Form.Control className="border border-dark" type="text" placeholder="Link da foto de perfil" />
        </Form.Group>
      </section>
      <SigninFooter nome={nome} senha={senha} email={email} cep={cep} cpf={cpf} endereco={endereco} telefone={telefone} modelo={props.modelo}/>
    </Form>
  );
};

export default SigninClient;
