import React from 'react';
import '../../assets/css/footer.css';
import "@lottiefiles/lottie-player";

const Footer = () => {
    return (
        <div className="d-flex align-items-center footer justify-content-around">

            <div className="d-flex justify-content-center footerItem ">
                <lottie-player
                    autoplay
                    loop
                    mode="normal"
                    src="https://assets5.lottiefiles.com/packages/lf20_hu9cd9.json"
                    style={{width: "280px"}}
                >
                </lottie-player>
            </div>

            <div className="d-flex justify-content-center footerItem">
                <div className="d-flex flex-column text-center w-75">
                    <p>Informações</p>
                    <p className="footerInfoContato">Insira aqui as informações necessárias como contato, cnpj, endereço, telefone</p>
                    <p>Se tiver mais algumas informações pode acrescentar nesse espaço! Os textos podem ir até aqui nessa linha</p>
                </div>
            </div>

            <p className="d-flex justify-content-center footerItem">LOGO</p>


        </div>
    )
}

export default Footer
