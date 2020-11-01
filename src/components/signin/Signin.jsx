import React from "react";
import "../../assets/css/signin.css";
import SigninClient from "./SigninClient";
import SigninProvider from "./SigninProvider";
import { Tabs, Tab } from "react-bootstrap-tabs";

const Signin = () => {
  return (
    <main className="signin">
      <Tabs onSelect={(index, label) => console.log(label + " selected")}>
        <Tab label="Cliente"><SigninClient /></Tab>
        <Tab label="Fornecedor"><SigninProvider/></Tab>
      </Tabs>
    </main>
  );
};

export default Signin;
