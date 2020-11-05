import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import postUser from "../../api/post";

const SigninFooter = (props) => {
  const [bodyReq, setBodyReq] = React.useState({});

  const handlePress = (event) => {
    event.preventDefault();

    if (props.modelo === "cliente") {
      setBodyReq({
        nome: props.nome,
        senha: props.senha,
        telefone: props.telefone,
        cpf: props.cpf,
        endereco: props.endereco,
        cep: props.cep,
        email: props.email,
        foto:
          "https://icon-library.com/images/free-user-icon/free-user-icon-26.jpg",
      });
    } else {
      setBodyReq({
        nome: props.nome,
        senha: props.senha,
        telefone: props.telefone,
        cnpj: props.cnpj,
        endereco: props.endereco,
        cep: props.cep,
        email: props.email,
        razaoSocial: props.razao,
        foto:
          "https://www.kindpng.com/picc/m/224-2249869_market-market-icon-png-white-transparent-png.png",
      });
    }

    postUser(bodyReq, props.modelo).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <Form.Group
        controlId="formBasicCheckbox"
        className="d-flex justify-content-center"
      >
        <Form.Check
          type="checkbox"
          className="font-weight-bold"
          label="Aceito os Termos e condições e autorizo o uso de meus dados de acordo com a Declaração de privacidade."
          required
        />
      </Form.Group>
      <Form.Group>
        <Button onClick={handlePress} variant="primary" type="submit" className="font-weight-bold">
          Enviar
        </Button>
        <Form.Text muted className="w-100 d-flex justify-content-center ">
          <p className="mb-0 text-dark">Já possui conta?</p>
        </Form.Text>
        <Form.Text muted>
          <a href="#Login">Faça Login</a>
        </Form.Text>
      </Form.Group>
    </>
  );
};

export default SigninFooter;
