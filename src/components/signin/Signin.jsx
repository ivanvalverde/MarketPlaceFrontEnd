import React from "react";
import "../../assets/css/signin.css";
import SigninClient from "./SigninClient";
import SigninProvider from "./SigninProvider";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const Signin = () => {

  return (
    <main className="signin bg-secondary">
      <Tabs defaultActiveKey="cliente" id="uncontrolled-tab-example" className="font-weight-bold text-dark" >
        <Tab eventKey="cliente" title="Cliente" >
          <SigninClient modelo="cliente"/>
        </Tab>
        <Tab eventKey="fornecedor" title="Fornecedor" >
          <SigninProvider modelo="fornecedor"/>
        </Tab>
      </Tabs>
    </main>
  );
};

export default Signin;
