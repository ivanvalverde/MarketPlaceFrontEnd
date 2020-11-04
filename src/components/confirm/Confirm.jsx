import React from "react";
import "../../assets/css/confirm.css";
import img from "../../assets/imgs/check-mark.svg";

const Confirm = (props) => {

  return (
    <main className="confirm d-flex justify-content-center align-items-center">
      <section className="w-50 h-50">
        <h2 className="title text-center">{props.children}</h2>
        <figure className="d-flex justify-content-center align-items-center">
          <img src={img} alt="check" className=""/>
        </figure>
      </section>
    </main>
  );
};

export default Confirm;
