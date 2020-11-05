import React from "react";
import "../../assets/css/denied.css";


const Denied = (props) => {

  return (
    <main className="denied d-flex justify-content-center align-items-center bg-secondary">
      <section className="w-50 h-50">
        <h2 className="title text-center ">{props.children? props.children :"Acesso negado, senha ou usuário incorreto!"}</h2>
        <figure className="d-flex justify-content-center align-items-center">
          <img src={props.img} alt="check" className=""/>
        </figure>
      </section>
    </main>
  );
};

export default Denied;
