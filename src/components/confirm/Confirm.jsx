import React from "react";
import "../../assets/css/confirm.css";
import img from "../../assets/imgs/check-mark.svg";

const Confirm = (props) => {

  return (
    <main className="confirm d-flex justify-content-center align-items-center bg-secondary">
      <section className="w-50 ">
        <h2 className="title text-center">{props.children? props.children :"Logado com sucesso!"}</h2>
        <figure className="d-flex justify-content-center flex-column align-items-center">
          <img src={img} alt="check" className=""/>
        </figure>
      </section>
    </main>
  );
};

export default Confirm;
