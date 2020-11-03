import React from "react";
import "../../assets/css/footer.css";
import "@lottiefiles/lottie-player";
import Logo from "../../assets/imgs/Logo.png";

const Footer = () => {
  return (
    <footer className="container-fluid footer">
      <div className="row ">
        <div className="col-12 col-sm-6 col-lg-4">
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets9.lottiefiles.com/packages/lf20_wdgehveh.json"
            style={{maxWidth: "70%", margin: "0 auto"}}
            className=""

          ></lottie-player>
        </div>

        <div className="col-12 col-sm-6 col-lg-4 d-flex align-items-center text-center pb-5 py-sm-5">
          <div className="flex-column w-75 mx-auto ">
            <p>Informações</p>
            <p className="footerInfoContato">
              Insira aqui as informações necessárias como contato, cnpj,
              endereço, telefone
            </p>
            <p>
              Se tiver mais algumas informações pode acrescentar nesse espaço!
              Os textos podem ir até aqui nessa linha
            </p>
          </div>
        </div>  
        <div className="col-12 col-lg-4 d-flex justify-content-center py-5">
          <img className="logo" src={Logo} alt="Logo do site contido no footer." />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
