import React from "react";
import "../../assets/css/signup.css";
import Form from "react-bootstrap/Form";
import SignupTitle from "./SignupTitle";
import SignupFooter from "./SignupFooter";

const Signup = () => {
  return (
    <main className="signup">
      <Form className="formProvider">
      <SignupTitle />
      <section className="inputs">
        <Form.Group controlId="formBasicEmail" className="groupEmail">
          <Form.Control type="email" placeholder="Email" required />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="groupPassword">
          <Form.Control type="password" placeholder="Senha" required />
        </Form.Group>
      </section>
      <SignupFooter />
    </Form>
    </main>
  );
};

export default Signup;
