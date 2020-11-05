import React from "react";
import Form from "react-bootstrap/Form";
import SignupTitle from "./SignupTitle";
import SignupFooter from "./SignupFooter";

const SignupModel = (props) => {

  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");
  

  const handleFormUser = (event)=>{
    setUsuario(event.target.value);
  }

  const handleFormPass = (event)=>{
    setSenha(event.target.value);
  }

  return (
    <Form className="formProvider rounded">
      <SignupTitle />
      <section className="inputs">
        <Form.Group controlId="formBasicEmail" className="groupEmail">
          <Form.Control onChange={handleFormUser} type="email" placeholder="Email" required />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="groupPassword">
          <Form.Control onChange={handleFormPass} type="password" placeholder="Senha" required />
        </Form.Group>
      </section>
      <SignupFooter inputUser={usuario} inputPass={senha} modelo={props.modelo}/>
    </Form>
  );
};

export default SignupModel;
