import React from "react";
import "../../assets/css/footer.css";
import "@lottiefiles/lottie-player";
import Logo from "../../assets/imgs/mercadinBlack.png";

const Footer = () => {
  return (
    <footer className="container-fluid footer">
      <div className="row">
        <div className="col-12 text-center">
          <img className="logo mx-auto d-block" src={Logo} alt="Logo do site contido no footer." />
          <p>Pague com cartão de crédito ou boleto.<br />
            7 dias para troca ou devolução.<br /></p>
              <p className="copyright">Copyright © 2020 - Todos os direitos reservados à MERCADIN</p>
            
        </div>
      </div>
    </footer>
  );
};

export default Footer;
