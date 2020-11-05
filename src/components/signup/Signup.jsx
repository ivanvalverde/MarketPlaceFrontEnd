import React from "react";
import "../../assets/css/signup.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import SignupModel from "./SignupModel";

const Signup = () => {

  return (
    <main className="signup bg-secondary">
      <Tabs defaultActiveKey="cliente" id="uncontrolled-tab-example"className="d-flex justify-content-center font-weight-bold text-dark">
        <Tab eventKey="cliente" title="Cliente">
          <SignupModel modelo="cliente"/>
        </Tab>
        <Tab eventKey="fornecedor" title="Fornecedor">
          <SignupModel modelo="fornecedor"/>
        </Tab>
      </Tabs>
    </main>
  );
};

export default Signup;
