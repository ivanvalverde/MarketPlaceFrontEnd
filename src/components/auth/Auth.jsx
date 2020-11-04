import React, { useContext } from 'react';
import UserContext from '../../userContext';
import { useHistory } from "react-router-dom";
import '../../assets/css/auth.css';
import { Dropdown } from 'react-bootstrap';

const Auth = () => {

    const { user, logout } = useContext(UserContext);
    const history = useHistory();

    const deslogando = () => {
        logout();
        history.push("/");
    }

    return (
        <div className="d-flex authDiv mr-4">

            <p className="authText mr-2">Olá {user.name}!</p>

            <Dropdown className="authButton">
                <Dropdown.Toggle id="dropdown-basic">
                    Ações
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Perfil</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Compras</Dropdown.Item>
                    <Dropdown.Item onClick={deslogando}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}

export default Auth;