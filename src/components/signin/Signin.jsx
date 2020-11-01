import React from "react";
import "../../assets/css/signin.css";
import SigninClient from "./SigninClient";
import SigninProvider from "./SigninProvider";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const Signin = () => {
  return (
    <main className="signin">
      <Tabs defaultActiveKey="cliente" id="uncontrolled-tab-example">
        <Tab eventKey="cliente" title="Cliente">
          <SigninClient />
        </Tab>
        <Tab eventKey="fornecedor" title="Fornecedor">
          <SigninProvider />
        </Tab>
      </Tabs>
    </main>
  );
};

export default Signin;
