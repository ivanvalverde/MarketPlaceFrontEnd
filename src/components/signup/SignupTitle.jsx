import React from "react";
import "../../assets/css/signup.css";
import Form from "react-bootstrap/Form";

const SigninTitle = () => {
  return (
    <Form.Group className="groupTitle">
      <h2 className="formTitle text-center text-dark font-weight-bold">Bem-vindo(a) de volta!
Faça seu login:</h2>
    </Form.Group>
  );
};

export default SigninTitle;
