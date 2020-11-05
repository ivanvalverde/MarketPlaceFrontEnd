import React from "react";
import "../../assets/css/signin.css";
import Form from "react-bootstrap/Form";

const SigninTitle = () => {
  return (
    <Form.Group className="groupTitle">
      <h2 className="formTitle text-center text-dark font-weight-bold">Insira seus dados</h2>
    </Form.Group>
  );
};

export default SigninTitle;
